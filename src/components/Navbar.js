import React from 'react'
import { Link } from "react-router-dom";


const Navbar = ({searchTerm ,setSearchTerm}) => {
    return (
        <div>
            <>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid" >
                        <Link class="navbar-brand" to="/">Projects-Library</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" to="/about">About US</Link>
                                </li>


                            </ul>
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)} />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        </div>
    )
}

export default Navbar
