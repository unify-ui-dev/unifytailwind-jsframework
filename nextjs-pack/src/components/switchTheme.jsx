"use client"
import { useTheme } from "next-themes"


export default function SwitchTheme() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="text-gray-700 dark:text-gray-300 flex items-center">
      Use DarkMode
      <input className="h-5 w-9 appearance-none rounded-full ring ring-gray-100 dark-ring-gray-700 bg-gray-100 dark:bg-gray-800 relative before:absolute before:w-4 before:h-4 before:top-1/2 before:-translate-y-1/2 before:rounded-full left-0 before:bg-gray-400 dark:before:bg-gray-500 checked:before:translate-x-full checked:before:!bg-blue-600 before:content-empty before:transition before:ease-linear before:duration-300 cursor-pointer" type="checkbox" role="switch" onChange={() => {
        if (theme === "light") {
            return setTheme("dark");
        }
        return setTheme("light");
      }} checked={theme === "dark"} />
    </div>

  )
}
