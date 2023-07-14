import {
  faBell,
  faCaretDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavbarComponent() {
  return (
    <div className="fixed w-full z-50">
      <Navbar className="navbar text-slate-300 xl:text-sm lg:text-xs w-full bg-gradient-to-b bg-opacity-5 from-zinc-950">
        <Container className="pt-4 pl-[3.6rem] flex items-center">
          <Navbar.Brand href="#home">
            <img src="src/assets/AppLogo.png" className="object-contain w-24" />
          </Navbar.Brand>
          <ul className="flex ml-9 w-2/3 xl:text-[0.87rem] lg:text-[0.85rem] md:text-[0.5rem] gap-3">
            <Nav.Link
              href="#home"
              tabIndex={0}
              className="mx-1 tracking-wide hover:text-zinc-400 focus:text-white focus:font-netflix_sans_bold"
            >
              Home
            </Nav.Link>
            <Nav.Link className="mx-1 tracking-wide hover:text-zinc-400 focus:text-white focus:font-netflix_sans_bold">
              Series
            </Nav.Link>
            <Nav.Link className="mx-1 tracking-wide hover:text-zinc-400 focus:font-netflix_sans_bold focus:text-white">
              Films
            </Nav.Link>
            <Nav.Link className="mx-1 tracking-wide hover:text-zinc-400 focus:font-netflix_sans_bold focus:text-white">
              New & Popular
            </Nav.Link>
            <Nav.Link className="mx-1 tracking-wide hover:text-zinc-400 focus:font-netflix_sans_bold focus:text-white">
              My List
            </Nav.Link>
            <Nav.Link className="mx-1 tracking-wide hover:text-zinc-400 focus:font-netflix_sans_bold focus:text-white">
              Browse by Languages
            </Nav.Link>
          </ul>
          <ul className="flex ms-auto w-72 items-center xl:text-[0.9rem] lg:text-[0.85rem] md:text-[0.5rem] gap-6">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
            <Nav.Link className="mx-0.5 tracking-wide hover:text-zinc-400 active:font-netflix_sans_bold focus:text-white">
              Children
            </Nav.Link>
            <FontAwesomeIcon icon={faBell} size="lg" />
            <div id="AvatarContainer" className="flex items-center">
              <img
                src="src/assets/avatar.jpg"
                alt="Avatar"
                className="h-8 w-8 rounded"
              />
              <FontAwesomeIcon icon={faCaretDown} className="pl-3" />
            </div>
          </ul>
        </Container>
      </Navbar>
    </div>
  );
}
