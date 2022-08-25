import React from 'react'

export default function Sidebar() {
  return (
   <nav id="sidebar">
  <div className="sidebar-header">
    <h3>Bootstrap Sidebar</h3>
    <strong>BS</strong>
  </div>
  <ul className="list-unstyled components">
    <li className="active">
      <a href="#homeSubmenu">
        <i className="fa fa-home" />
        Home
      </a>
    </li>
    <li className="list_item">
      <a href="#">
        <i className="fa fa-briefcase" />
        About
      </a>
      <a href="#pageSubmenu">
        <i className="fa fa-files-o" />
        Pages
      </a>
    </li>
    <li className="list_item">
      <a href="#">
        <i className="fa fa-link" />
        Portfolio
      </a>
    </li>
    <li className="list_item">
      <a href="#">
        <i className="fa fa-paperclip" />
        FAQ
      </a>
    </li>
    <li className="list_item">
      <a href="#">
        <i className="fa fa-paper-plane" />
        Contact
      </a>
    </li>
  </ul>
  <ul className="list-unstyled CTAs">
    <li><a href="" className="download">Download source</a>
    </li>
    <li><a href="" className="article">Back to article</a></li>
  </ul>
</nav>

  )
}
