import getCoverage, { Options, CoverageData } from "./getCoverage";
import path from "path";
import { generateCoverageBadge } from "./generateBadge";
import { Application, Renderer, RendererEvent } from "typedoc";
import { generate as generateText } from "./reporters/text";
import { generate as generateHTML } from "./reporters/html";
import { generate as generateJSON } from "./reporters/json";
import { ncp } from "ncp";
import { promisify } from "util";

const asyncNcp = promisify(ncp);

export type ProgramOptions = Options & {
  outputDir: string;
  threshold: number;
};

async function generateCoverageReport(
  options: ProgramOptions
): Promise<CoverageData> {
  // NOTE: Cleanup the folder
  const dirPath = options.outputDir;

  const data = await getCoverage({
    tsProjectFile: options.tsProjectFile,
    strict: options.strict,
    debug: options.debug,
    ignoreFiles: options.ignoreFiles,
    ignoreCatch: options.ignoreCatch,
    ignoreUnread: options.ignoreUnread,
    cache: options.cache,
  });

  console.log(generateText(data, options?.threshold || 0));

  generateCoverageBadge(dirPath, data.percentage);
  await generateHTML(data, options);
  await asyncNcp(
    path.join(__dirname, "../assets"),
    path.join(options.outputDir, "assets")
  );

  await generateJSON(data, options);

  return data;
}

export function load(app: Application) {
  app.renderer.on(Renderer.EVENT_END, async (event: RendererEvent) => {
    try {
      let outDir =
        app.options.getValue("out") || path.join(process.cwd(), "doc");
      outDir = path.join(outDir, "type-coverage");
      const threshold = 0;
      await generateCoverageReport({
        ...app.options,
        outputDir: outDir,
        threshold: threshold,
      });
    } catch (err) {
      console.log(err);
    }
  });
}
