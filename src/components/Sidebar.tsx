import { NavLink } from "./NavLink";
import { Logo } from "./icons/Logo";

export function Sidebar() {
    return (
        <aside className="border-r border-white/10 w-80 fixed left-0 top-0 bottom-0 p-6 hidden lg:block" >
            <Logo className="text-white h-4 w-auto-" />

            <nav className=" mt-10 flex flex-col gap-6 ">
                <div className=" flex flex-col gap-4 ">
                    <strong className=" text-zinc-100 font-medium text-sm ">
                        Guides
                    </strong>

                    <div className=" text-sm flex flex-col pl-2 ">
                        <NavLink href="/test/a"> Introduction</NavLink>
                        <NavLink href="/test/b"> Quick Start</NavLink>
                        <NavLink href="/test/c">SDKs</NavLink>
                        <NavLink href="/test/d">Authentication</NavLink>
                        <NavLink href="/test/e">PAgination</NavLink>
                        <NavLink href="/test/f">Errors</NavLink>
                        <NavLink href="/test/g">WekRooks</NavLink>
                    </div>
                </div>

                <div className=" flex flex-col gap-4 ">
                    <strong className=" text-zinc-100 font-medium text-sm ">
                        Resources
                    </strong>

                    <div className=" text-sm flex flex-col pl-2 ">
                        <NavLink href="/test/h">Contacts</NavLink>
                        <NavLink href="/test/i">Conversation</NavLink>
                        <NavLink href="/test/j">Massages</NavLink>
                        <NavLink href="/test/k">Groups</NavLink>
                        <NavLink href="/test/l">Attachments</NavLink>

                    </div>
                </div>
            </nav>
        </aside>
    )
}

{/* 'hidden lg:block' aqui estamos falando que ela por natureza é hidden, ou seja, não aparece, mas quando a largura for large ele fico bloqueado na tela */}