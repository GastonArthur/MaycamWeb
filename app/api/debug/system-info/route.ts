import { NextResponse } from "next/server"
import { platform, release } from "os"
import { writeFile, unlink } from "fs/promises"
import { existsSync } from "fs"
import { join } from "path"

export async function GET() {
  try {
    const cwd = process.cwd()
    const publicDir = join(cwd, "public")

    // Verificar permisos de escritura intentando crear y eliminar un archivo temporal
    let writePermission = false
    const testFile = join(publicDir, "write-test.tmp")

    try {
      await writeFile(testFile, "test")
      await unlink(testFile)
      writePermission = true
    } catch (error) {
      console.error("Error al verificar permisos de escritura:", error)
      writePermission = false
    }

    return NextResponse.json({
      success: true,
      os: `${platform()} ${release()}`,
      nodeVersion: process.version,
      cwd: cwd,
      publicDir: publicDir,
      publicDirExists: existsSync(publicDir),
      writePermission: writePermission,
    })
  } catch (error) {
    console.error("Error al obtener información del sistema:", error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Error desconocido",
      },
      { status: 500 },
    )
  }
}

