declare module 'swiftlatex' {
  export class PdfTeXEngine {
    loadEngine(): Promise<void>
    makeMemFSFolder(path: string): Promise<void>
    writeMemFSFile(path: string, content: string | ArrayBuffer): Promise<void>
    setEngineMainFile(path: string): Promise<void>
    compileLaTeX(): Promise<{ pdf: ArrayBuffer }>
  }

  export class XeTeXEngine {
    loadEngine(): Promise<void>
    makeMemFSFolder(path: string): Promise<void>
    writeMemFSFile(path: string, content: string | ArrayBuffer): Promise<void>
    setEngineMainFile(path: string): Promise<void>
    compileLaTeX(): Promise<{ pdf: ArrayBuffer }>
  }

  export class DvipdfmxEngine {
    loadEngine(): Promise<void>
    makeMemFSFolder(path: string): Promise<void>
    writeMemFSFile(path: string, content: string | ArrayBuffer): Promise<void>
    setEngineMainFile(path: string): Promise<void>
    compilePDF(): Promise<{ pdf: ArrayBuffer }>
  }
}
