import React, {Component} from 'react';

class Content extends Component{
    render(){
        return(
<div id="wrapper_content">
                            <div class="best_seller">
                                <div class="judul">
                                    <h1>Best Seller</h1>
                                </div>
                                <table class="tabel-bs">
                                    <tr>
                                        <td >
                                            <a href="#">
                                            <img src={require('../images/product1.jpg')}/>
                                            <h1>SEPATU RUNNING</h1>
                                            <h2>Rp. 200.000.00</h2>
                                            </a>
                                        </td>
                                        <td >
                                            <a href="#">
                                            <img src={require('../images/product2.jpg')}/>
                                            <h1>SEPATU SAFETY</h1>
                                            <h2>Rp. 300.000.00</h2>
                                            </a>
                                        </td>
                                        <td >
                                            <a href="#">
                                            <img src={require('../images/product3.jpg')}/>
                                            <h1>SEPATU BOLA</h1>
                                            <h2>Rp. 200.000.00</h2>
                                            </a>
                                        </td>
                                    </tr>
                                </table>
                                <div class="btn-promo">
                                <a href="#"><button class="btn btn-outline-dark btn-lg">Explore More</button></a>
                                </div>
                            </div>

    <div class="side-promo">
        <div class="judul">
            <h1>Trending Now</h1>
        </div>
        <div class="kiri">
            <a href="#">
            <img src={require('../images/620x420_N2_SEMUADIBAWAH299999EXTRA30_WOMEN.jpg')}/>
            </a>
        </div>
        <div class="kanan">
            <a href="#">
            <img src={require('../images/360x420_N1_EOSS_GIFTFORMOTHER25_WOMEN.jpg')}/>
            </a>
        </div>
                <div class="btn-promo">
                <a href="#"><button class="btn btn-outline-dark btn-lg">Subscribe Now</button></a>
                </div>
    </div>

    <div class="feature-brand">
        <div class="judul">
            <h1>Featured Brands</h1>
        </div>
        <div class="fb-table">
            <table>
                <tr>
                    <td><a href="#"><img src={require('../images/436x248_mobile_brands_cottonon.jpg')}/></a></td>
                    <td><a href="#"><img src={require('../images/436x248_mobile_brands_keds.jpg')}/></a></td>
                    <td><a href="#"><img src={require('../images/436x248_mobile_brands_puma.jpg')}/></a></td>
                    <td><a href="#"><img src={require('../images/casio_r4_revised.jpg')}/></a></td>
                </tr>
                <tr>
                    <td><a href="#"><img src={require('../images/436x248_KANKENVC10.jpg')}/></a></td>
                    <td><a href="#"><img src={require('../images/436x248_mobile_brands_keds.jpg')}/></a></td>
                    <td><a href="#"><img src={require('../images/436x248_mobile_brands_levis.jpg')}/></a></td>
                    <td><a href="#"><img src={require('../images/adidas_local_logo_28oct.png')}/></a></td>
                </tr>
            </table>


        </div>
    </div>
   
            <div id="content_footer">
                <h1>BELANJA ONLINE FASHION WANITA TERBARU</h1>
                <p>
                    Bagi para wanita, Anda telah memilih yang tepat. 
                    ZALORA Indonesia hadir untuk memberikan yang terbaik 
                    dalam tren fashion wanita. Kami membawa top brand lokal 
                    dan internasional terkemuka supaya Anda selalu memiliki 
                    pakaian yang sempurna dimanapun dan kapanpun. Dapatkan 
                    inspirasi fashion seperti floral, denim, stripes, 
                    monokrom, dan banyak lagi. Kami menyediakan koleksi 
                    terlengkap seperti atasan, bawahan, dress, outerwear, 
                    jumpsuit, hingga pakaian olahraga agar Anda selalu 
                    menjaga kesehatan. ZALORA Indonesia juga menyediakan 
                    fashion busana muslim wanita seperti Kaftan, Gamis, 
                    Dress Muslim, Outerwear, Hijab dan banyak lagi dari 
                    para desainer dan brand lokal.
                </p>
                <h1>Fashion Wanita Dengan Koleksi Brand-brand Terbaik</h1>
                <p>
                    Fashion wanita, fashion sangat erat hubungannya 
                    dengan wanita dan seolah sudah menjadi kebutuhan 
                    mendasar. Oleh karena itu ZALORA Indonesia terus 
                    berupaya menjawab kebutuhan fashion wanita ini dengan 
                    menawarkan berbagai produk fashion wanita dari mulai 
                    sepatu wanita, pakaian wanita, aksesoris wanita, dan 
                    busana muslim dengan harga spesial dari brand-brand 
                    terbaik lokal maupun internasional. Kami selalu 
                    menyediakan brand ternama dengan kualitas terbaik dan 
                    siap memberikan kepuasan akan trend fashion wanita saat 
                    ini. Tampil lebih baik, menarik, dan selalu ikuti 
                    perkembangan fashion global bersama ZALORA Indonesia.
                </p>

            </div>
            </div>
        );
    }
}

export default Content;