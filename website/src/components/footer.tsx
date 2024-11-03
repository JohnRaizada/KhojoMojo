export default function Footer() {
    return (
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-end">
            <p className="text-xs text-gray-500 p-1 m-1">
                &copy; {(new Date()).getFullYear()} Khojo Mojo. All rights reserved.
            </p>
        </footer>
    )
}
