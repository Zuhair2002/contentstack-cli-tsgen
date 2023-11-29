const testData = require("./options.ct");

import NullDocumentationGenerator from "../../src/lib/tsgen/docgen/nulldoc";
import tsgenFactory from "../../src/lib/tsgen/factory";

const tsgen = tsgenFactory({
  docgen: new NullDocumentationGenerator(),
});

describe("all options", () => {
  const result = tsgen(testData.options);

  test("definition", () => {
    expect(result.definition).toMatchInlineSnapshot(`
      "export interface Options
      {
      /** Version */
      version:  4 ;
      title: string  ;
      url: string  ;
      single_line_textbox_not_required?: string | null ;
      single_line_textbox_required: string  ;
      single_line_textbox_multiple?: string[] | null ;
      single_line_textbox_multiple_max_limit?: [string, string, string, string, string] | null ;
      }"
    `);
  });
});
