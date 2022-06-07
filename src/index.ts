import getCoverage, { Options, CoverageData } from "./getCoverage";
import path from "path";
import { generateCoverageBadge } from "./generateBadge";
import { Application,  Renderer, RendererEvent } from "typedoc";


export type ProgramOptions = Options & {
  outputDir: string;
  threshold: number;
};

async function generateCoverageReport(
  options: ProgramOptions
): Promise<CoverageData> {
  // NOTE: Cleanup the folder
  const dirPath =  options.outputDir;

  const data = await getCoverage({
    tsProjectFile: options.tsProjectFile,
    strict: options.strict,
    debug: options.debug,
    ignoreFiles: options.ignoreFiles,
    ignoreCatch: options.ignoreCatch,
    ignoreUnread: options.ignoreUnread,
    cache: options.cache
  });

  console.log(data);

  generateCoverageBadge(dirPath, data.percentage);
  return data;
}

export function load(app: Application) {
  app.renderer.on(Renderer.EVENT_END, async (event: RendererEvent) => {
    try {
      const outDir = app.options.getValue("out") || path.join(process.cwd(), "doc");
      console.log({outDir})
      const threshold =  0;
      await generateCoverageReport({
        ...app.options,
        outputDir: outDir,
        threshold: threshold
      });
    } catch (err) {
      console.log(err);
    }
  });
}
