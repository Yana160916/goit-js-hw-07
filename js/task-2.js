const images = [
  {
  url: "https://s3-alpha-sig.figma.com/img/5dde/4622/0907ed8fd691000bbe73fee51101d8ee?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qPWDJFj0PjmPGXTF5dlpD0ZsTbGRhUMla9RhK4gZpg8wQf-aGIKGjj1tA931Ip5xHXK4H9j9qv~z6y08SM9WlybiQFNmRWOrTgx1tSsOf7MuT3L9QH8BKFQE-sAVYF8h-gd0iFxFMaKwIw7zD340nmycBr~vf4nH-azVTkmbWXGVKzav3Mz3XoLkfdIH~SuwBlkGDVx8cxdZKPZt4bLkKuqPaffEOcEX7B6UQP48eAppkCxSIlWJAoc2n8njepMAIWjqRXVhJZrL1dRhz5~eIomw0unyUpUtbnOM8iq5dmynN6pv7FGdxo2NJjgZ~2ASg2HHivyBe0gOSvgWe7Pd5g__",
  alt: "Stickers, markers on the table, creating goals",
  width: "360px",
  height: "300px"
    
  },
  {
    url: "https://s3-alpha-sig.figma.com/img/390f/d68d/955549ff429e815e5e2bade820721376?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B4QhY1kc4P-MPNFNasycFUUfaZZwnf04vK~tbWqb46lcrLuvXyNseQO7wUJBj~GFREl~EKK6bl5v~8RWOpZYonDVwM7TLXXYFYhW-ySCSSkhPOY8kwxxAUAbHH9bcW-2CS5crHo5xEzCtof3Au7-3bu3RyKZ-FYyK~ktubhSAnpWaKEfaU776t-y5xhpiccdwD6osVBOe5zsD5Z-a3zPNcOtQnFnklDoXDkZl3DREuHYaeaYHr5xtnc~Uw~71cqU1HImzFiELThoHIamxNdHN2xAAIfSqB2hzM3lt8LY7atCufcs-TtwWuZW4w3Y~37DwsW5JuQTtw0Yc-TnDln2vw__",
    alt: "light bulb in hand against sunset background",
    width: "360px",
    height: "300px"
  },
  {
    url: "https://s3-alpha-sig.figma.com/img/48be/88f7/1998c160dc2be34a63b3f2183392ff8b?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cseamcifHP~sD8f7bYspOHuZeMLdETk1oq-mup5Pf0ML~LETA-jeMaR2mJzq9vWYh1FF3dodZov7XEbNTAHuCSyPf1~RRFzDuwXqi~QeVslpRymVpbCV2GmSnmJbU90uRyRpZf1Tl4MbBH58RxZEmcsN4so2mYhAgxItf9DmAXuD6-4puCL7uaaE6nUZxHbQP1hR-I5bENsuu7niPoEROexV7SqHT0QF0SAlVLU-BYbMtDooQEIv1s0LjOPeGLqOW6b5bv8Wa67ODt5MxRLfSDK0fn2gGLTdXMS0NAxhdEvJfi473jZHo~uuCdZ1jkbO4Bx00w4BL3WXae3on30ATA__",
    alt: "Phone in hand, motivational inscription on the phone screen",
    width: "360px",
    height: "300px"
  },
  {
    url: "https://s3-alpha-sig.figma.com/img/7391/477d/e6356a31941e3cc31c991e67894bb945?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DWDPk5sUL81ZmwLrZG65~zU7eoOJ3NKTiJRt4dsZ-dzjb71A5vXg6Wc0WBsvWxG9ec9Z8g0ewYTl6rl~CxnjNms9VOVClelJZByA9EoQLNEvfyV0-ZJbOUT3vqNBhm-HSkIlmi4MNJjjyxYruWwE88VwLfd6tCcGEpT04ITfMk4FspV0vL8rnBOZsgDLpq6tQCyIBSvqT7PcWLdL7BrA7wGzs-hZq-1~~LUBfaYIv4Yiu9JBXCrAJCryXl3DAi9gSYXOI4H8PjkA9tFRqjTtmjEswhZ4137kNmbqVfipRaMqy-4vdhp2ehcouyO777adVWMNqBXPI4cyfum~kHVzHg__",
    alt: "Stylish conference room with sun rays",
    width: "360px",
    height: "300px"
  },
  {
    url: "https://s3-alpha-sig.figma.com/img/c9a7/04d1/391760494c3ad88cab833c525eb33d6c?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JVfaCo2Kiia5flJXJB2DwYGTVKrpwoBhWg7R6AoQxyTFTQDA4Dsc7~YQbEXlnDzn1IIR2pmTum6zM9s2c4msA2nb8YrwOU5E7NYiwcBpj88JkWeTm45wBUtzJ6ZSC9lBI-A8qtJqhIIx~ilSJdZY8BFb~MnmvMriUz~CegYqyuUhHmlslrkYVIwku~jSwzN3yWpNR0j3TBME2T~LXvffU~WDs~tmyQwWabTEQCSOHkVN0GS4fZkPaHQfixVMZa5O9gEhigPU18sgpgbsxt7T8a3P-y2AjkBakY79aG9wXUQN2l9pBR1sU4cYI0H0dd3l3vvT2DLuyoyIVbMzbO9U~Q__",
    alt: "Coworking space with tennis table in multicolored colors",
    width: "360px",
    height: "300px"
  },
  {
    url: "https://s3-alpha-sig.figma.com/img/2bab/8cd4/1bcc5a2255da522ea2a79402020a7d5d?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a3rbr~zNNyI6l4MqLznOnuRMHmATMZYVkQL8ROFj-UM6F~ouNwHHu6K38zQWgoQiD3WcxEEuNxzvRtbnUHAr5WRNMiPzQ07rR1OykiyVy7kpBnJybdXKzDfDsmeHlqTe9GdB8UxhZgeA7SdV~QEvjwde68640F0C79sTdFEbVq-8cosO6BuYydbfKquJiozb~i3z00biCVTWgqVsU9Z7JEylAbRaNKFEI30DeXJ1rpO1t~OaPMq8ka-~NIFaJz5HKOkdSYkn7e5GIHyLZuj7vNYbLE9-LmxwuFxAvBn89pR7PzT-SRn6Xu-3Ee4ta1spnhcfFH~6o1iuXcZZztEjog__",
    alt: "People working on computers in an office space",
    width: "360px",
    height: "300px"
  },
];

const gallery = document.querySelector(".gallery");

const galleryHTML = images.map(image => `
  <li>
    <img src="${image.url}" alt="${image.alt}">
  </li>
`).join('');

gallery.innerHTML = galleryHTML;
