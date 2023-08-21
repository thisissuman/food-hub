/*
 * HMR (Hot module reolding)
 * File wacther algorithm
 * BUNDLING
 * MINIFY
 * Cleaning our code
 * Dev and production build
 * Super fast build algorithm
 * Image optimization
 * Caching while development
 * Compression
 * Compatitable with older version of browser
 * HTTPS on dev
 * Port number
 * Consistent Hashing algorithm
 * Zero config
 * Transitive dependencies
 */

/* Header 
      -Logo
      -Nav items
      -Cart
      Body
      -Saearchbar
      -Restaurant list
          Restuarant card
          -image
          -name
          -rating
          -cusine
      Footer
        -Links
        -Copyright */

import React, { createElement } from "react";
import ReactDOM, { createRoot } from "react-dom/client";

import "./index.css";
const Title = () => {
  return (
    <img
      className="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kfdoTQAkfzU6jov5O7b0CfQIZM1fYWPv65XEbwEcRIZcaMZuPUcuV9hwX5Ixi0_1VD8&usqp=CAU"
      alt=""
    />
  );
};
const restaurantList = [
  {
    info: {
      id: "195976",
      name: "Satya Sai",
      cloudinaryImageId: "meerjzdqi0r7peojhi4q",
      locality: "Kamapalli Square",
      areaName: "Berhampur",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian", "Desserts"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "195976",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2900,
      },
      parentId: "178928",
      avgRatingString: "3.8",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 8.3,
        serviceability: "SERVICEABLE",
        slaString: "33 mins",
        lastMileTravelString: "8.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-21 23:29:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/satya-sai-kamapalli-square-berhampur-berhampur-195976",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "190026",
      name: "Nandan International",
      cloudinaryImageId: "xfmlz6te3pnnlep5jpw0",
      locality: "Church Road",
      areaName: "Berhampur",
      costForTwo: "₹300 for two",
      cuisines: ["Biryani", "Chinese", "North Indian", "South Indian"],
      avgRating: 3.6,
      feeDetails: {
        restaurantId: "190026",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 5000,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5000,
      },
      parentId: "143869",
      avgRatingString: "3.6",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 10.1,
        serviceability: "SERVICEABLE",
        slaString: "36 mins",
        lastMileTravelString: "10.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-21 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/nandan-international-church-road-berhampur-berhampur-190026",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "190362",
      name: "Atithi Inn",
      cloudinaryImageId: "aswajxmsabuliam2sgit",
      locality: "Tata Benz Square",
      areaName: "Berhampur",
      costForTwo: "₹200 for two",
      cuisines: [
        "Biryani",
        "Chinese",
        "South Indian",
        "North Indian",
        "Beverages",
      ],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "190362",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2900,
      },
      parentId: "37581",
      avgRatingString: "3.8",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 8.7,
        serviceability: "SERVICEABLE",
        slaString: "32 mins",
        lastMileTravelString: "8.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-21 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/atithi-inn-tata-benz-square-berhampur-berhampur-190362",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "304053",
      name: "Hotel Bhubaneswari Palace",
      cloudinaryImageId: "yn11pqyd11z18bfzh5z8",
      locality: "Baidiya Nath Pur",
      areaName: "Berhampur",
      costForTwo: "₹100 for two",
      cuisines: ["Chinese", "South Indian"],
      avgRating: 4.3,
      veg: true,
      feeDetails: {
        restaurantId: "304053",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 5000,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5000,
      },
      parentId: "98370",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 10.1,
        serviceability: "SERVICEABLE",
        slaString: "37 mins",
        lastMileTravelString: "10.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-21 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/hotel-bhubaneswari-palace-baidiya-nath-pur-berhampur-berhampur-304053",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "461414",
      name: "Olive Restaurant",
      cloudinaryImageId: "nlrtwwsnqklwp86ocbbz",
      locality: "Subharoa Square",
      areaName: "Berhampur",
      costForTwo: "₹300 for two",
      cuisines: ["Indian", "Chinese", "Tandoor", "North Indian", "Snacks"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "461414",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2900,
      },
      parentId: "151431",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 41,
        lastMileTravel: 9.2,
        serviceability: "SERVICEABLE",
        slaString: "41 mins",
        lastMileTravelString: "9.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-21 22:15:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "FREE ITEM",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/olive-restaurant-subharoa-square-berhampur-berhampur-461414",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "201629",
      name: "O' Kareem Family Restaurant",
      cloudinaryImageId: "g2nncuggd2pq4csa9yaq",
      locality: "Daringbadi - Gopalpur Road",
      areaName: "Manjari Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["Biryani", "Chinese", "Continental"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "201629",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2900,
      },
      parentId: "150758",
      avgRatingString: "3.8",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 9.1,
        serviceability: "SERVICEABLE",
        slaString: "36 mins",
        lastMileTravelString: "9.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-21 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/o-kareem-family-restaurant-daringbadi-gopalpur-road-manjari-nagar-berhampur-201629",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "190624",
      name: "It's my Way cafe & Restro",
      cloudinaryImageId: "risvtorxfkuyzsscesmc",
      locality: "Daringbadi - Gopalpur Road",
      areaName: "Gajapati Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese", "North Indian", "Desserts", "Beverages"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "190624",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2900,
      },
      parentId: "107704",
      avgRatingString: "4.0",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 7.2,
        serviceability: "SERVICEABLE",
        slaString: "36 mins",
        lastMileTravelString: "7.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-21 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/its-my-way-cafe-and-restro-daringbadi-gopalpur-road-gajapati-nagar-berhampur-190624",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "349697",
      name: "KFC",
      cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
      locality: "Telephone Bhawan Road",
      areaName: "Berhampur",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "349697",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 5000,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5000,
      },
      parentId: "547",
      avgRatingString: "3.9",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 10.2,
        serviceability: "SERVICEABLE",
        slaString: "38 mins",
        lastMileTravelString: "10.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-21 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-telephone-bhawan-road-berhampur-berhampur-349697",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "336567",
      name: "Cafe Coffee Day",
      cloudinaryImageId: "l779x6jdm9sg8qbqje4e",
      locality: "Ramalingam Tank Road",
      areaName: "Berhampur",
      costForTwo: "₹300 for two",
      cuisines: [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Burgers",
        "Ice Cream",
        "Bakery",
        "Fast Food",
      ],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "336567",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 5000,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5000,
      },
      parentId: "1",
      avgRatingString: "3.9",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 10.7,
        serviceability: "SERVICEABLE",
        slaString: "37 mins",
        lastMileTravelString: "10.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-21 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/cafe-coffee-day-ramalingam-tank-road-berhampur-berhampur-336567",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "253132",
      name: "New Ganguram Mistan",
      cloudinaryImageId: "ok5tmtnaqhjcs7icuiox",
      locality: "Kamapalli Goilundi Road",
      areaName: "Berhampur",
      costForTwo: "₹200 for two",
      cuisines: ["Sweets"],
      avgRating: 4.2,
      veg: true,
      feeDetails: {
        restaurantId: "253132",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2900,
      },
      parentId: "146548",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 8.3,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "8.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-21 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "FREE ITEM",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/new-ganguram-mistan-kamapalli-goilundi-road-berhampur-berhampur-253132",
      type: "WEBLINK",
    },
  },
];
const RestaurantCard = ({ cloudinaryImageId, avgRating, cuisines, name }) => {
  console.log(name);
  return (
    <div className="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt=""
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating}</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      {restaurantList.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id}
        {...restaurant.info}
          /* key={restaurant.info.id}
          name={restaurant.info.name}
          cuisines={restaurant.info.cuisines}
          avgRating={restaurant.info.avgRating}
          cloudinaryImageId={restaurant.info.cloudinaryImageId} */
        />
      ))}
    </div>
  );
};
const Header = () => (
  <div className="header">
    <Title />
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  </div>
);

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};
const Footer = () => {
  return <div>Footer</div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); // this render method takes an element and injected in root
