import SocialForm from "./SocialForm";
import OpeningHours from "./OpeningHours";
import FooterHeading from "./FooterHeading";
function Footer() {
  const socialFormObj = [
    {
      img: "./img/icon-fb.svg",
      url: "www.facebook.com/gripbarber",
      alt: "Barber Shop Facebook icon",
    },
    {
      img: "./img/icon-ig.svg",
      url: "www.instagram.com/gripbarber",
      alt: "Barber Shop Instagram icon",
    },
    {
      img: "./img/icon-tt.svg",
      url: "www.tiktok.com/gripbarber",
      alt: "Barber Shop TikTok icon",
    },
  ];

  const contactFormobj = [
    {
      img: "./img/icon-fb.svg",
      url: "barbershop@gmail.com",
      alt: "Barber Shop Facebook icon",
    },
    {
      img: "./img/icon-ig.svg",
      url: "+48 575 553 234",
      alt: "Barber Shop Instagram icon",
    },
  ];

  return (
    <div className="w-full flex flex-col px-4 py-8 gap-12 bg-dark items-center justify-between lg:flex-row-reverse lg:gap-24 2xl:px-14">
      <div>
        <FooterHeading title="ZAOBSERWUJ NAS" />
        <div className="flex flex-col justify-start items-start self-start">
          {contactFormobj.map((x, index) => (
            <SocialForm
              key={index}
              imgProp={x.img}
              urlProp={x.url}
              altProp={x.alt}
            />
          ))}
        </div>
      </div>

      <div>
        <FooterHeading title="ZAOBSERWUJ NAS" />
        <div>
          {socialFormObj.map((x, index) => (
            <SocialForm
              key={index}
              imgProp={x.img}
              urlProp={x.url}
              altProp={x.alt}
            />
          ))}
        </div>
      </div>

      <img
        className="w-2/6 md:w-1/3 lg:w-1/4 xl:w-2/12"
        src="./img/logo.svg"
        alt="Grip Barber Logo"
      ></img>
    </div>
  );
}

export default Footer;
