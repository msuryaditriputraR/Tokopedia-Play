import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Frame from "../components/Frame";
import Comments from "../components/Comments";
import Products from "../components/Products";

const Detail = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState({});

  useEffect(() => {
    const data = [
      {
        name: "Pasar Ponsel Surabaya",
        title: "Oppo Reno 5",
        videoId: "_DHtREjG0Kc",
        linkVideo: "https://www.youtube-nocookie.com/embed/_DHtREjG0Kc",
        product: [
          {
            linkProduct:
              "https://www.tokopedia.com/pasarponselsby/oppo-a58-nfc-6-128-garansi-resmi-termurah-black-048d3?extParam=ivf%3Dfalse?extParam=whid%3D2119084",
            title: "OPPO A58 NFC 6/128",
            price: "Rp 2.499.000",
            imageURL:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/8/10/5585417d-61c4-4236-9eed-48fea8185e90.jpg",
          },
          {
            linkProduct:
              "https://www.tokopedia.com/pasarponselsby/realme-11-pro-5g-8-256-gb-garansi-resmi-termurah-black-bd921?extParam=whid%3D2119084",
            title: "Realme 11 Pro",
            price: "Rp 5.599.000",
            imageURL:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/8/10/e1c30efc-a184-4d7d-8199-44f0a7edbf49.jpg",
          },
          {
            linkProduct:
              "https://www.tokopedia.com/pasarponselsby/realme-11-pro-12-512-gb-garansi-resmi-termurah-putih?extParam=whid%3D2119084",
            title: "Realme 11 Pro +",
            price: "Rp 6.999.000",
            imageURL:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/8/8/f4daa91f-047a-4fe5-9e9e-7f3568e0bfaa.jpg",
          },
        ],
        comments: [],
      },
      {
        name: "JV Hasanah",
        title: "Gamis Lebaran nyaman seharian",
        videoId: "el3vuFVkZuk",
        linkVideo: "https://www.youtube-nocookie.com/embed/el3vuFVkZuk",
        product: [
          {
            linkProduct:
              "https://www.tokopedia.com/jvhasanah/set-palazzo-abstrak-jv-hasanah-oneset-baju-kurung-with-palazzo-pants-black-oneset-dc4c9?extParam=whid%3D4942318",
            title: "Set Palazzo Abstrak",
            price: "Rp 195.000",
            imageURL:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/8/8/f8986b4a-31ab-455b-bcad-6ebd8bc5bda9.jpg",
          },
          {
            linkProduct:
              "https://www.tokopedia.com/jvhasanah/celana-serut-kulot-lurus-polos-adem-jv-hasanah-loose-pants-babyterry-black-02e51?extParam=whid%3D4942318",
            title: "Celana Serut Kulot",
            price: "Rp 125.000",
            imageURL:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/7/15/d94bbae0-3bea-422e-8d9f-17919b521815.jpg",
          },
          {
            linkProduct:
              "https://www.tokopedia.com/jvhasanah/celana-katun-lurus-pinggang-karet-jv-hasanah-asena-loose-cotton-pants-rosegold-fc1a3?extParam=whid%3D4942318",
            title: "Celana Katun",
            price: "Rp 117.000",
            imageURL:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/6/21/430610ba-ee8d-4d15-a616-bb946a102c88.jpg",
          },
          {
            linkProduct:
              "https://www.tokopedia.com/jvhasanah/tunic-basic-katun-toyobo-button-front-jv-hasanah-zahra-midi-tunic-black-6256a?extParam=whid%3D4942318",
            title: "Tunic Katun",
            price: "Rp 177.000",
            imageURL:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/8/1/3e34abe7-6c40-4c77-838f-b5d0b8ca1ca5.jpg",
          },
        ],
        comments: [],
      },
      {
        name: "Libby Baby",
        title: "REVIEW BAJU ANAK LIBBY BABY",
        videoId: "CW7AOyBk3Po",
        linkVideo: "https://www.youtube-nocookie.com/embed/CW7AOyBk3Po",
        product: [
          {
            linkProduct:
              "https://www.tokopedia.com/libbybaby/libby-earth-colour-basic-tee-seri-2-1pcs-pack-mock-orange-9-12m?extParam=whid%3D2600236",
            title: "Libby Earth Colour",
            price: "Rp 31.900",
            imageURL:
              "https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2023/8/7/52b02b5b-7f55-4ea5-ab97-36624e36ecbd.jpg",
          },
          {
            linkProduct:
              "https://www.tokopedia.com/libbybaby/libby-stelan-baju-pendek-celana-panjang-newborn-bon-voyage-1-stel-tico-the-jungle-0-3-bulan?extParam=whid%3D2600236",
            title: "Libby Stelan Baju Celana Panjang",
            price: "Rp 39.800",
            imageURL:
              "https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2023/7/22/cd8fe2fb-ea1e-4162-9729-5509d52ce8e6.jpg",
          },
          {
            linkProduct:
              "https://www.tokopedia.com/libbybaby/libby-stelan-baju-pendek-anak-kecil-motif-bon-voyage-1stel-tico-the-jungle-s-small?extParam=whid%3D2600236",
            title: "Libby Stelan Baju Celana Pendek",
            price: "Rp 43.830",
            imageURL:
              "https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2023/7/20/010473f8-dde1-4c01-8e05-8ceb96536e64.jpg",
          },
        ],
        comments: [],
      },
      {
        name: "Okechuku",
        title: "Review Produk Okechuku Official With paulinekharismaCTK",
        videoId: "b7GeMc-RvGg",
        linkVideo: "https://www.youtube-nocookie.com/embed/b7GeMc-RvGg",
        product: [
          {
            linkProduct:
              "https://www.tokopedia.com/okechuku/okechuku-unilo-size-s-big-kaos-katun-polos-lengan-pendek-wanita-marun-s?extParam=whid%3D17377",
            title: "Kaos Katun Polos Wanita",
            price: "Rp 67.500",
            imageURL:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/8/1/222120f9-46b2-46e4-9cb8-48bedcfa81b6.jpg",
          },
          {
            linkProduct:
              "https://www.tokopedia.com/okechuku/okechuku-unilo-size-s-big-cotton-tshirt-katun-lengan-pendek-peach-s?extParam=whid%3D17377",
            title: "Cotton Tshirt",
            price: "Rp 67.500",
            imageURL:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/8/1/38c965a2-7250-49aa-b414-81d2f03867be.jpg",
          },
          {
            linkProduct:
              "https://www.tokopedia.com/okechuku/okechuku-eco-celana-pendek-pria-jumbo-short-pants-pria-celana-big-size-hijau-1ae4d?extParam=whid%3D17377",
            title: "Celana Pendek Pria",
            price: "Rp 99.900",
            imageURL:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/8/5/93a15681-09c7-4027-ae27-116156fa07b6.jpg",
          },
          {
            linkProduct:
              "https://www.tokopedia.com/okechuku/okechuku-unilo-kaos-polos-pria-kaos-lengan-pendek-basic-t-shirt-casual-brown-s-388c0?extParam=whid%3D17377",
            title: "Kaos Polos Pria",
            price: "Rp 67.500",
            imageURL:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/7/27/2ec96451-a570-40be-9ef4-445be5ccc522.jpg",
          },
        ],
        comments: [],
      },
      {
        name: "Unilever",
        title: "Setiap U Berikan Kebaikan",
        videoId: "wn90Ot2YA78",
        linkVideo: "https://www.youtube-nocookie.com/embed/wn90Ot2YA78",
        product: [
          {
            linkProduct:
              "https://www.tokopedia.com/unilever/tresemme-shampoo-170ml-conditioner-170ml-mask-180ml-free-serum?extParam=whid%3D13056835",
            title: "TRESemme Shampoo",
            price: "Rp 154.100",
            imageURL:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/8/4/87e0f632-028e-4e8c-bbb3-42bd63e98654.jpg",
          },
          {
            linkProduct:
              "https://www.tokopedia.com/unilever/lifebuoy-sabun-cair-total-10-refill-825ml-free-rinso-kapsul-trial-kit?extParam=whid%3D13056835",
            title: "Lifebuoy Sabun Cair",
            price: "Rp 43.500",
            imageURL:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/7/31/66d78ea9-0d7a-4a31-9419-23f60206bb8b.jpg",
          },
          {
            linkProduct:
              "https://www.tokopedia.com/unilever/molto-perfume-beads-luxury-perfume-purple-free-rinso-kapsul-trial-kit?extParam=whid%3D13056835",
            title: "Molto Perfume Beads",
            price: "Rp 47.700",
            imageURL:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/7/31/8a035374-8d68-4cb1-8916-46a54b221ea1.jpg",
          },
          {
            linkProduct:
              "https://www.tokopedia.com/unilever/rinso-matic-deterjen-bukaan-depan-1-45l-free-rinso-kapsul-trial-kit?extParam=whid%3D13056835",
            title: "Rinso Deterjen",
            price: "Rp 64.600",
            imageURL:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/7/31/0a11e9b5-af87-4d61-bb45-5c1e3be4397d.jpg",
          },
          {
            linkProduct:
              "https://www.tokopedia.com/unilever/zwitsal-baby-bath-hair-body-aloe-vera-600ml-free-rinso-kapsul-trialkit?extParam=whid%3D13056835",
            title: "Zwitsal Baby Bath",
            price: "Rp 44.900",
            imageURL:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/7/31/a9928989-80ba-4ad6-87ed-5c9ea5f9ac26.jpg",
          },
          {
            linkProduct:
              "https://www.tokopedia.com/unilever/buy-2-pepsodent-sikat-gigi-bamboo-salt-free-toothbrush-holder?extParam=whid%3D13056835",
            title: "2 Pepsodent",
            price: "Rp 48.100",
            imageURL:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/6/8/6675de77-dce1-47cd-bf98-21c9a889acff.jpg",
          },
          {
            linkProduct:
              "https://www.tokopedia.com/unilever/citra-sabun-mandi-cair-natural-white-bengkoang-220-ml-twinpack?extParam=whid%3D13056835",
            title: "Citra Sabun Mandi",
            price: "Rp 38.000",
            imageURL:
              "https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2023/5/31/444b1dbd-e637-4bea-932e-13e1c606cd93.jpg",
          },
          {
            linkProduct:
              "https://www.tokopedia.com/unilever/pears-pure-gentle-body-wash-with-mint-extract-500ml-twinpack?extParam=whid%3D13056835",
            title: "Pears Pure & Gentle",
            price: "Rp 176.000",
            imageURL:
              "https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2023/5/30/3520d7eb-5194-4d2d-be5f-a3ef2de0f748.jpg",
          },
          {
            linkProduct:
              "https://www.tokopedia.com/unilever/lifebuoy-sabun-cuci-piring-refill-1500ml?extParam=whid%3D133554545",
            title: "Lifebuoy Sabun Cuci",
            price: "Rp 23.400",
            imageURL:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/2/19/1f83c3ef-e99e-44c6-a178-bf556bde02df.jpg",
          },
          {
            linkProduct:
              "https://www.tokopedia.com/unilever/axe-parfum-saku-dark-temptation-15ml",
            title: "Axe Parfum Saku",
            price: "Rp 14.600",
            imageURL:
              "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/8/10/1089d8b4-ddac-4f51-8fe6-621ef4c345a8.png.webp?ect=4g",
          },
        ],
        comments: [],
      },
      {
        name: "Galaxy Camera",
        title:
          "Canon EOS R10 Review Indonesia | Hasil Foto Video & Spesifikasi Lengkap",
        videoId: "DLKjeBlykVY",
        linkVideo: "https://www.youtube-nocookie.com/embed/DLKjeBlykVY",
        product: [
          {
            linkProduct:
              "https://www.tokopedia.com/galaxycamera/panasonic-lumix-dmc-fz300-camera-digital-zoom-fz300-super-zoom-resmi?extParam=whid%3D351821",
            title: "Panasonic Lumix",
            price: "Rp 8.179.000",
            imageURL:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/7/31/86d1511b-b3c9-4aa4-ac88-4983628a78fa.jpg",
          },
          {
            linkProduct:
              "https://www.tokopedia.com/galaxycamera/canon-eos-r6-mark-ii-kit-24-105mm-is-stm-camera-mirrorless-r6-2-resmi?extParam=whid%3D351821",
            title: "Canon EOS R6",
            price: "Rp 47.999.000",
            imageURL:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/7/27/219961d8-bdfa-4cb5-942a-7e1f04077a55.jpg",
          },
          {
            linkProduct:
              "https://www.tokopedia.com/galaxycamera/microphone-rode-podmic-usb-mic-pod-mic-broadcast-garansi-resmi?extParam=whid%3D351821",
            title: "Mic Rode PodMic",
            price: "Rp 2.788.000",
            imageURL:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/7/27/6abd2fec-3909-4e06-87dc-ce874f662f1c.jpg",
          },
          {
            linkProduct:
              "https://www.tokopedia.com/galaxycamera/sony-a7s-iii-body-only-a7siii-a7sm3-a7s-mark3-a7s-mark-iii-resmi?extParam=whid%3D351821",
            title: "Sony A7s",
            price: "Rp 48.499.000",
            imageURL:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/7/26/4ac27380-4033-4a37-aec1-32fc68fbeb85.jpg",
          },
          {
            linkProduct:
              "https://www.tokopedia.com/galaxycamera/battery-vw-vbt190-for-panasonic-hc-series-vw-vbt190-baterai-handycam?extParam=whid%3D351821",
            title: "Battery HandyCam Panasonic",
            price: "Rp 499.000",
            imageURL:
              "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/7/25/e28084bc-8c4c-4ee6-8990-9cce1e1503b5.png",
          },
        ],
        comments: [],
      },
    ];

    setVideo(data.filter((d) => d.videoId === videoId)[0]);
  }, [videoId]);
  return (
    <>
      <Header />
      <section className="mt-24 grid grid-cols-3 grid-rows-3 gap-5">
        <Frame
          videoId={video.videoId}
          linkVideo={video.linkVideo}
          title={video.title}
        />
        <Comments />
        <Products />
      </section>
      <Footer />
    </>
  );
};

export default Detail;
