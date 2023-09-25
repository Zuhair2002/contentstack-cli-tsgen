const testData = require('./number.ct')

import NullDocumentationGenerator from '../../src/lib/tsgen/docgen/nulldoc'
import tsgenFactory from '../../src/lib/tsgen/factory'

const tsgen = tsgenFactory({
  docgen: new NullDocumentationGenerator(),
})

describe('builtin number field', () => {
  const result = tsgen(testData.builtinNumber)

  test('metadata', () => {
    const types = result.metadata.types
    expect([...types.contentstack]).toHaveLength(0)
    expect([...types.globalFields]).toHaveLength(0)
    expect(types.javascript).toContain('number')
  })

  test('definition', () => {
    expect(result.definition).toMatchInlineSnapshot(`
      "export interface Number
      {
      /** Version */
      version:  2 ;
      title: string;
      url: string;
      number?: number;
      number_required: number;
      number_multiple?: number[];
      number_multiple_max_limit?: [number, number, number, number, number, number, number, number, number, number];
      number_required_multiple_max_limit: [number, number, number];
      }"
    `)
  })
})
