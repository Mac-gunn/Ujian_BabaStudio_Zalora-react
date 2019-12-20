import React, {Component} from 'react';
import {Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';

class Header extends Component{
    render(){
        return(
            <div class="wrapper_header">
            <div class="header">
                      <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
                      <Navbar.Brand href="#home" class="header1"><img src={require('../images/za.JPG')}/></Navbar.Brand>
                      <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                      <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto mr-18">
                          <Nav.Link href="#features">Pria</Nav.Link>
                          <Nav.Link href="#features">Wanita</Nav.Link>
                          <Nav.Link href="#pricing">Anak-Anak</Nav.Link>
                          </Nav>
                          <form class="form-inline" >
                          <input class="form-control mr-sm-1" type="search" placeholder="Search" aria-label="Search"/>
                          <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fas fa-search"></i></button>
                          </form>
                          <Nav>
                            <div class="btn-group">
                              
                              <button type="button" class="btn " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <img src={require('../images/acc.JPG')}/>
                              </button>
                              <div class="dropdown-menu ">
                                <a class="dropdown-item" href="#">Log in</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Sign Up</a>
                              </div>
                            </div>
                          <Nav.Link href="#deets"><img src={require('../images/fav.JPG')}/></Nav.Link>
                          <Nav.Link href="#memes"><img src={require('../images/cart.JPG')}/></Nav.Link>
                        </Nav>
                      </Navbar.Collapse>
                      </Navbar>

                      <div class="navbarpromo">
                        <div class="navbar_promo_content">
                          <div class="npc_kiri">
                          <ul>
                          <li><a href="#"><img src={require("../images/3.PNG")}/> Garansi 30 Hari</a></li>
                            <li><a href="#"><img src={require('../images/1.PNG')}/>Kualitas Terbaiq</a></li>
                            <li><a href="#"><img src={require('../images/Capture.PNG')}/>Gratis Pengembalian</a></li>
                          </ul>
                        </div>
                        <div class="npc_kanan">
                          <a href="#"><button class="btn btn-dark">Download dan dapatkan diskon 22%</button></a>
                        </div>
                        </div>
                      </div>
                    
                    </div>
            </div>
        );
    }
}

export default Header;