"use client"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Palette, RotateCcw, Droplets, FontText } from "lucide-react"
import { ColorPicker } from "@/components/theme/color-picker"
import { themeColors, fontFamilies } from "@ipollo/core-config"
import type { CardThemeConfig } from "@ipollo/core-config"

interface LocalCardThemeEditorProps {
  theme: CardThemeConfig
  setTheme: (newTheme: Partial<CardThemeConfig>) => void
  resetToGlobal: () => void
}

export function LocalCardThemeEditor({ theme, setTheme, resetToGlobal }: LocalCardThemeEditorProps) {
  return (
    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-background/50 hover:bg-background/80">
            <Palette className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64 p-4 space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="font-medium text-sm">Customize Card</h4>
            <Button variant="ghost" size="icon" className="h-7 w-7" onClick={resetToGlobal}>
              <RotateCcw className="h-4 w-4" />
              <span className="sr-only">Reset to Global Theme</span>
            </Button>
          </div>

          <div className="space-y-2">
            <Label htmlFor="background-style" className="text-xs">
              Background Style
            </Label>
            <Select
              value={theme.backgroundStyle}
              onValueChange={(value: "solid" | "frosted" | "none") => setTheme({ backgroundStyle: value })}
            >
              <SelectTrigger id="background-style">
                <SelectValue placeholder="Select style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="solid">Solid</SelectItem>
                <SelectItem value="frosted">Frosted</SelectItem>
                <SelectItem value="none">None</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-xs">Colors</Label>
            <div className="grid grid-cols-2 gap-2">
              <ColorPicker
                label="Background"
                color={theme.background}
                setColor={(color) => setTheme({ background: color })}
                presets={themeColors.map((c) => c.value)}
                icon={<Droplets className="h-4 w-4" />}
              />
              <ColorPicker
                label="Title"
                color={theme.titleColor}
                setColor={(color) => setTheme({ titleColor: color })}
                presets={themeColors.map((c) => c.value)}
                icon={<FontText className="h-4 w-4" />}
              />
              <ColorPicker
                label="Text"
                color={theme.textColor}
                setColor={(color) => setTheme({ textColor: color })}
                presets={themeColors.map((c) => c.value)}
                icon={<FontText className="h-4 w-4" />}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="font-family" className="text-xs">
              Font Family
            </Label>
            <Select value={theme.fontFamily} onValueChange={(font) => setTheme({ fontFamily: font })}>
              <SelectTrigger id="font-family">
                <SelectValue placeholder="Select font" />
              </SelectTrigger>
              <SelectContent>
                {fontFamilies.map((font) => (
                  <SelectItem key={font.value} value={font.value} style={{ fontFamily: font.value }}>
                    {font.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
