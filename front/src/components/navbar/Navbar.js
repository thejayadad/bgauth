import React from 'react'
import "./navbar.css"
import logo from "../../public/images/logo.png"
import {Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header class="">
    <nav class="navbar navbar-expand-lg">

      <div class="container">
        <div>
        <a class="navbar-brand" href="index.html"><h2>Responsive Blog<em>.</em></h2></a>

        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">

            <li class="nav-item active">
              <a class="nav-link" href="index.html">Home
                <span class="sr-only">(current)</span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="about.html">About Us</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="blog.html">Blog</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="post-details.html">Post Details</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="contact.html">Contact Us</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Navbar