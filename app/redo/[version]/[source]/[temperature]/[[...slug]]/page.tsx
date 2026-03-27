import RedoPageClient from "@/app/redo/RedoPageClient";

interface RedoShortRoutePageProps {
  params: Promise<{
    version: string;
    source: string;
    temperature: string;
    slug?: string[];
  }>;
}

export default async function RedoShortRoutePage({
  params,
}: RedoShortRoutePageProps) {
  const { version, source, temperature } = await params;

  return (
    <RedoPageClient
      initialSource={source}
      initialVersion={version}
      initialTemperature={temperature}
    />
  );
}
