export default function SideBar ({children}) {
    return(
        <aside>
            <ul className="hidden">
                <li>Categorias</li>
                <li>Marcas</li>
            </ul>
                <div>{children}</div>
        </aside>
    )
};