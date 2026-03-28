'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { redirectIfUrlTemperatureNotInMap, TEMPERATURE_MAP } from "@/lib/temperature-utils";

// Lista de assets críticos para pré-carregar
const criticalAssets = {
  images: [
    '/images/logo.png',
    '/images/hero-images.png',
    '/images/journey-background.png',
    // Adicione outras imagens críticas
  ]
}

export default function SplashScreenOro({ children, theme }: { children: React.ReactNode; theme?: string }) {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (!params?.temperature) return;

    const rawTemperature = Array.isArray(params.temperature)
      ? params.temperature[0]
      : params.temperature;
    if (!rawTemperature) return;

    redirectIfUrlTemperatureNotInMap(
      params.temperature,
      {
        version: String(params.version ?? ""),
        headline: String(params.headline ?? ""),
        theme: String(params.theme ?? ""),
        slug: params.slug,
      },
      searchParams.toString(),
      router.replace
    );
  }, [params, router, searchParams]);

  useEffect(() => {
    const paramValue = params.temperatura as string || "";
    const parts = paramValue.split("-") || [];
    const isDarkValue = parts[2] || "";

    if (params.theme === "2" || isDarkValue === "h2" || theme === "2") {
      setIsDark(false);
    } else {
      setIsDark(true);
    }
  }, [params.theme]);

  useEffect(() => {
    let totalAssets = criticalAssets.images.length
    let loadedAssets = 0

    const updateProgress = () => {
      loadedAssets++
      const newProgress = Math.round((loadedAssets / totalAssets) * 100)
      setProgress(newProgress)

      if (loadedAssets === totalAssets) {
        // Adiciona um pequeno atraso para uma transição suave
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      }
    }

    // Pré-carregar imagens
    criticalAssets.images.forEach(src => {
      const img = new Image()
      img.src = src
      img.onload = updateProgress
      img.onerror = updateProgress // Continua mesmo com erro
    })

    // Timeout de segurança (caso algo falhe)
    const safetyTimeout = setTimeout(() => {
      setLoading(false)
    }, 5000)

    return () => clearTimeout(safetyTimeout)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex flex-col items-center justify-center sm:bg-center bg-left bg-cover bg-no-repeat z-50"
          style={{ backgroundImage: `${isDark ? "url('/images/v1/bg-two.webp')" : "url('/images/v1/bg-two.webp"}` }}
        >
          <motion.img
            src={isDark ? "/images/v1/LOGO-OLDI.png" : "/images/v1/LOGO-OLDI.png"}
            alt="Logo O Proximo Nivel"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-[250px] mb-8"
          />
          <div className="w-64 h-2 bg-[#07242c] rounded-full overflow-hidden">
            <motion.div
              className="h-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
              style={{ backgroundColor: "#C0964B" }}
            ></motion.div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
