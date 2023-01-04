export default function SideBar ({children}) {
    return(
        <aside>
            <ul>
                <li>Categorias</li>
                <li>Marcas</li>
                <div>{children}</div>
            </ul>
        </aside>
    )
};