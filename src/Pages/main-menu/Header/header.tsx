interface HeaderProps {
    title : string;
    tabs : string[];    
}

function Header({title, tabs}: HeaderProps){
return <header className = "header-class">
{title}

    <nav >
        {tabs.map((tab) =>(
            <a href = {'#section'+tab}  className="nav-link"  >{tab}</a>
        ))

        }
    </nav>
    
</header>

}
export default Header;