export default defineAppConfig({
    ui: {
        primary: "orange",
        gray: "muted",
        button: {
            rounded: "rounded-sm",
            font: 'font-normal',
            padding: {
                sm: "py-3 px-5",
            },
            variant: {
                soft: "bg-{color}-100 border border-{color}-500 hover:bg-{color}-50",
            },
            color: {
                white: {
                    solid: "shadow-none ring-gray-200 dark:bg-white dark:text-black",
                },
            },
        },
        card: {
            rounded: "rounded-none",
            ring: "ring-0",
            background: "dark:bg-white"
        },
        verticalNavigation: {
            font: "font-normal",
        },
        accordion: {
            item: {
                padding: "p-0",
                color: "text-slate-800",
            },
        },
        input: {
            rounded: "rounded-sm",
        },
        textarea: {
            rounded: 'rounded-sm'
        },
        radio: {
            label: 'font-normal',
        },
        checkbox: {
            label: 'font-normal text-black/80 dark:text-black/80',
            base: 'disabled:bg-gray-100 dark:disabled:bg-gray-100',
            background: 'dark:bg-white',
            rounded: 'rounded-sm'
        },
        badge: {
            rounded: 'rounded-sm'
        }
    },
})