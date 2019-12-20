import React, {Component} from 'react';


class Footer extends Component{
    render(){
        return(
            <div id="footer">
                    <div id="footer2">
                    <table>
                        <tr>
                            <td width="550px" valign="top">
                                <img src={require('../images/za.JPG')} width="350px"/>
                                <p>
                                        Sebagai Pusat Fashion Online di Asia, 
                                        kami menciptakan kemungkinan-kemungkinan 
                                        gaya tanpa batas dengan cara memperluas 
                                        jangkauan produk, mulai dari produk 
                                        internasional hingga produk lokal dambaan. 
                                        Kami menjadikan Anda sebagai pusatnya. 
                                        Bersama ZALORA, You Own Now.
                                </p>
                                <h2>Temukan Kami</h2>
                                <div class="smedia">
                                <a href="#"><img src={require('../images/facebook.png')}/></a>
                                <a href="#"><img src={require('../images/instagram.png')}/></a>
                                <a href="#"><img src={require('../images/twitter.png')}/></a>
                                <a href="#"><img src={require('../images/pinterest.png')}/></a>
                                </div>
                            </td>
                            <td width="175px" valign="top" >
                                <h1>Layanan </h1>
                                <ul>
                                    <li><a href="#">Bantuan</a></li>
                                    <li><a href="#">Cara Pengambilan</a></li>
                                    <li><a href="#">Product Index</a></li>
                                    <li><a href="#">pembelanjaan</a></li>
                                    <li><a href="#">Hubungi Kami</a></li>
                                </ul>
                            </td>
                            <td width="175px" valign="top">
                                <h1>Tentang Kami</h1>
                                <ul>
                                    <li><a href="#">Tentang Kami</a></li>
                                    <li><a href="#">Pers Media</a></li>
                                    <li><a href="#">Karir</a></li>
                                    <li><a href="#">Kabijakan Privasi</a></li>
                                    <li><a href="#">Marketing</a></li>
                                </ul>
                            </td>
                            <td width="400px" valign="top">
                                    <h1>Anda Baru di Zalora ?</h1>

                                    <p>Dapatkan Rp 75.000 VOUCHER (ditambah dengan berita fashion dan peluncuran brand terbaru) hanya dengan berlangganan newsletter kami.</p>

                                <form action="post">
                                    Alamat Email Kamu<br/><br/>
                                    <div class="input-group ">
                                    <input type="text" class="form-control" placeholder="Example : abc@cdef.com" aria-label="Example : abc@cdef.com" aria-describedby="basic-addon2"/>
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button">Submit</button>
                                    </div>
                                    </div>
                                </form>
                            </td>
                        </tr>
                    </table>
                </div>
                </div>
        );
    }
}

export default Footer;