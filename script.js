TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfov": 360,
  "cardboardMenu": {
   "fontFamily": "Arial",
   "selectedFontColor": "#FFFFFF",
   "label": "Media",
   "backgroundColor": "#404040",
   "fontColor": "#FFFFFF",
   "rollOverOpacity": 0.8,
   "id": "Menu_64D10A57_74A3_AA1D_41AA_9A941353C88B",
   "opacity": 0.4,
   "class": "Menu",
   "selectedBackgroundColor": "#202020",
   "children": [
    {
     "label": "0. 360 FACHADA FRONTAL",
     "click": "this.mainPlayList.set('selectedIndex', 0)",
     "class": "MenuItem"
    },
    {
     "label": "01. 360 SALON",
     "click": "this.mainPlayList.set('selectedIndex', 1)",
     "class": "MenuItem"
    },
    {
     "label": "02. 360 TERRAZA",
     "click": "this.mainPlayList.set('selectedIndex', 2)",
     "class": "MenuItem"
    },
    {
     "label": "3. 360 FIRE PIT",
     "click": "this.mainPlayList.set('selectedIndex', 3)",
     "class": "MenuItem"
    },
    {
     "label": "4. 360 PATIO",
     "click": "this.mainPlayList.set('selectedIndex', 4)",
     "class": "MenuItem"
    },
    {
     "label": "5. 360 ESCALERAS",
     "click": "this.mainPlayList.set('selectedIndex', 5)",
     "class": "MenuItem"
    },
    {
     "label": "6. 360 BAÑO SOCIAL",
     "click": "this.mainPlayList.set('selectedIndex', 6)",
     "class": "MenuItem"
    },
    {
     "label": "7. 360 HAB AUX",
     "click": "this.mainPlayList.set('selectedIndex', 7)",
     "class": "MenuItem"
    },
    {
     "label": "8. 360 BAÑO HAB  AUX",
     "click": "this.mainPlayList.set('selectedIndex', 8)",
     "class": "MenuItem"
    },
    {
     "label": "10. 360 HAB PPAL",
     "click": "this.mainPlayList.set('selectedIndex', 9)",
     "class": "MenuItem"
    },
    {
     "label": "11. 360 BAÑO PPAL",
     "click": "this.mainPlayList.set('selectedIndex', 10)",
     "class": "MenuItem"
    },
    {
     "label": "12. 360 balcon ppal",
     "click": "this.mainPlayList.set('selectedIndex', 11)",
     "class": "MenuItem"
    },
    {
     "label": "13 360 hall arriba",
     "click": "this.mainPlayList.set('selectedIndex', 12)",
     "class": "MenuItem"
    },
    {
     "label": "14. 360 BAÑO PISCINAL",
     "click": "this.mainPlayList.set('selectedIndex', 13)",
     "class": "MenuItem"
    }
   ],
   "rollOverBackgroundColor": "#000000",
   "rollOverFontColor": "#FFFFFF"
  },
  "class": "Panorama",
  "id": "panorama_7BB37475_74A3_DE1D_41D6_5976EBF88E7F",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_7BB37475_74A3_DE1D_41D6_5976EBF88E7F_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_7BB34475_74A3_DE1D_41C1_B42CA84011D7",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_7AD64D6E_74AE_AE0F_41B9_905730BF0835, this.camera_646CBB12_74A3_AA17_41D4_3796E8100347); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -0.34,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_7BB37475_74A3_DE1D_41D6_5976EBF88E7F_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.44
       }
      ]
     }
    ],
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_7BB37475_74A3_DE1D_41D6_5976EBF88E7F_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_7BB37475_74A3_DE1D_41D6_5976EBF88E7F.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "thumbnailUrl": "media/panorama_7BB37475_74A3_DE1D_41D6_5976EBF88E7F_t.jpg",
  "hfovMax": 100,
  "pitch": 0,
  "label": "0. 360 FACHADA FRONTAL",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "mouseControlMode": "drag_rotation",
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": false,
  "gyroscopeEnabled": true,
  "class": "PanoramaPlayer",
  "preloadEnabled": false,
  "touchControlMode": "drag_acceleration",
  "buttonCardboardView": {
   "iconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37.png",
   "minWidth": 1,
   "width": "17.15%",
   "paddingRight": 0,
   "class": "IconButton",
   "height": "76.75%",
   "mode": "push",
   "maxWidth": 70,
   "paddingBottom": 0,
   "shadow": false,
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "transparencyActive": false,
   "propagateClick": false,
   "cursor": "hand",
   "horizontalAlign": "center",
   "data": {
    "name": "IconButton8475"
   },
   "maxHeight": 70,
   "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
   "minHeight": 1,
   "borderRadius": 0,
   "borderSize": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0
  },
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true
 },
 {
  "id": "panorama_7BB37475_74A3_DE1D_41D6_5976EBF88E7F_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_64D10A57_74A3_AA1D_41AA_9A941353C88B",
  "class": "Panorama",
  "id": "panorama_63483777_6F29_6154_41DB_3760202A9DDC",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_63483777_6F29_6154_41DB_3760202A9DDC_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_634BC777_6F29_6154_41D7_8F9C9766B058",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_613A17F4_6F2A_E154_41DA_9A0A3A8ED703, this.camera_645EFB24_74A3_AA33_41D5_28CF8AB6EF4E); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -3.86,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_63483777_6F29_6154_41DB_3760202A9DDC_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.06
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_634BD777_6F29_6153_41DA_8E8860AF0D84",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_7AD64D6E_74AE_AE0F_41B9_905730BF0835, this.camera_64511B36_74A3_AA1F_41CB_8E628E8A9452); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": 179.78,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_63483777_6F29_6154_41DB_3760202A9DDC_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.82
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_634BE778_6F29_615C_4176_B2F83C200B81",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_642F9ACB_74AE_AA75_41D7_0D5A0826F1F6, this.camera_6443AB47_74A3_AA7D_41A8_BF30E7914873); this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -114.4,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_63483777_6F29_6154_41DB_3760202A9DDC_0_HS_7_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.19
       }
      ]
     }
    ],
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_63483777_6F29_6154_41DB_3760202A9DDC_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_63483777_6F29_6154_41DB_3760202A9DDC.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "thumbnailUrl": "media/panorama_63483777_6F29_6154_41DB_3760202A9DDC_t.jpg",
  "hfovMax": 100,
  "pitch": 0,
  "label": "01. 360 SALON",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_63483777_6F29_6154_41DB_3760202A9DDC_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 0.69,
   "pitch": -0.48
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_64D10A57_74A3_AA1D_41AA_9A941353C88B",
  "class": "Panorama",
  "id": "panorama_613A17F4_6F2A_E154_41DA_9A0A3A8ED703",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_613A17F4_6F2A_E154_41DA_9A0A3A8ED703_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_613A37F4_6F2A_E154_41AD_A3224961E4E9",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_63483777_6F29_6154_41DB_3760202A9DDC, this.camera_7B928C20_74A3_AE33_41D3_63961A49559D); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 8.01,
        "yaw": 179.74,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 193,
           "width": 143,
           "url": "media/panorama_613A17F4_6F2A_E154_41DA_9A0A3A8ED703_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 1.95
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_613A57F4_6F2A_E154_41B8_F19454D846B7",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_7AD10C1A_74A2_AE17_41CC_29DA07FBB19B, this.camera_7B886C32_74A3_AE17_41C8_623FDF4EE2F1); this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -53.1,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_613A17F4_6F2A_E154_41DA_9A0A3A8ED703_0_HS_8_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.44
       }
      ]
     }
    ],
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_613A17F4_6F2A_E154_41DA_9A0A3A8ED703_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_613A17F4_6F2A_E154_41DA_9A0A3A8ED703.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "thumbnailUrl": "media/panorama_613A17F4_6F2A_E154_41DA_9A0A3A8ED703_t.jpg",
  "hfovMax": 100,
  "pitch": 0,
  "label": "02. 360 TERRAZA",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_613A17F4_6F2A_E154_41DA_9A0A3A8ED703_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 0.23,
   "pitch": -7.55
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_64D10A57_74A3_AA1D_41AA_9A941353C88B",
  "class": "Panorama",
  "id": "panorama_7AD10C1A_74A2_AE17_41CC_29DA07FBB19B",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_7AD10C1A_74A2_AE17_41CC_29DA07FBB19B_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_7ADEDC1A_74A2_AE17_41D8_07084FBD46DC",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_613A17F4_6F2A_E154_41DA_9A0A3A8ED703, this.camera_7BE16C7A_74A3_AE17_41A7_EF0A66DB2478); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": 116.47,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_7AD10C1A_74A2_AE17_41CC_29DA07FBB19B_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 1.57
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_7ADECC1A_74A2_AE17_41D6_2BCF31B1F30F",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_7F8D023F_74BD_BA0D_417E_1180A03B8903, this.camera_7BEB4C68_74A3_AE33_41CB_B9E72B8E9CF9); this.mainPlayList.set('selectedIndex', 13)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 7.54,
        "yaw": -172.43,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_7AD10C1A_74A2_AE17_41CC_29DA07FBB19B_0_HS_10_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 7.1
       }
      ]
     }
    ],
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_7AD10C1A_74A2_AE17_41CC_29DA07FBB19B_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_7AD10C1A_74A2_AE17_41CC_29DA07FBB19B.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "thumbnailUrl": "media/panorama_7AD10C1A_74A2_AE17_41CC_29DA07FBB19B_t.jpg",
  "hfovMax": 100,
  "pitch": 0,
  "label": "3. 360 FIRE PIT",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_7AD10C1A_74A2_AE17_41CC_29DA07FBB19B_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_64D10A57_74A3_AA1D_41AA_9A941353C88B",
  "class": "Panorama",
  "id": "panorama_7AD64D6E_74AE_AE0F_41B9_905730BF0835",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_7AD64D6E_74AE_AE0F_41B9_905730BF0835_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_7BF953A5_74A7_7A3D_4191_3A6E7992AF8D",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_7BB37475_74A3_DE1D_41D6_5976EBF88E7F, this.camera_647A9AFF_74A3_AA0D_41C4_707D82C4BBC5); this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 7.57,
        "yaw": 179.78,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_7AD64D6E_74AE_AE0F_41B9_905730BF0835_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 5.09
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_7BA722AC_74A7_DA33_4182_FF10A33BFADC",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_63483777_6F29_6154_41DB_3760202A9DDC, this.camera_64085AEE_74A3_AA0F_41D2_4E0328B142E1); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -5.12,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_7AD64D6E_74AE_AE0F_41B9_905730BF0835_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.06
       }
      ]
     }
    ],
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_7AD64D6E_74AE_AE0F_41B9_905730BF0835_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_7AD64D6E_74AE_AE0F_41B9_905730BF0835.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "thumbnailUrl": "media/panorama_7AD64D6E_74AE_AE0F_41B9_905730BF0835_t.jpg",
  "hfovMax": 100,
  "pitch": 0,
  "label": "4. 360 PATIO",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_7AD64D6E_74AE_AE0F_41B9_905730BF0835_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -1.41,
   "pitch": -10.98
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_64D10A57_74A3_AA1D_41AA_9A941353C88B",
  "class": "Panorama",
  "id": "panorama_642F9ACB_74AE_AA75_41D7_0D5A0826F1F6",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_642F9ACB_74AE_AA75_41D7_0D5A0826F1F6_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_642F6ACB_74AE_AA75_41DC_7BB932E625D9",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_7BCACD77_74AF_EE1D_41B0_52494C93AF56, this.camera_7BAA1BEB_74A3_AA35_41C0_F3471CA22FA7); this.mainPlayList.set('selectedIndex', 6)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": 76.03,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_642F9ACB_74AE_AA75_41D7_0D5A0826F1F6_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.94
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_642F7ACB_74AE_AA75_41DB_205CAF6D2799",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_64813651_74AF_5A15_41DB_B381890254F4, this.camera_7B9CFC0E_74A3_AE0F_41D4_682EF3F36C0E); this.mainPlayList.set('selectedIndex', 7)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -83.5,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_642F9ACB_74AE_AA75_41D7_0D5A0826F1F6_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 1.57
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_642F2ACB_74AE_AA75_41C4_722E30D07605",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_7A0D12A7_74A2_DA3D_41DA_811333031F88, this.camera_7BAE2BD9_74A3_AA15_4194_C8BE4E1BADE0); this.mainPlayList.set('selectedIndex', 12)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 6.91,
        "yaw": -10.14,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_642F9ACB_74AE_AA75_41D7_0D5A0826F1F6_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 24.68
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_642F0ACB_74AE_AA75_41A4_176F18353AED",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_63483777_6F29_6154_41DB_3760202A9DDC, this.camera_7BA41BFD_74A3_AA0D_41DB_2FA1D51A6CF1); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": 87.33,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_642F9ACB_74AE_AA75_41D7_0D5A0826F1F6_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.19
       }
      ]
     }
    ],
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_642F9ACB_74AE_AA75_41D7_0D5A0826F1F6_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_642F9ACB_74AE_AA75_41D7_0D5A0826F1F6.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "thumbnailUrl": "media/panorama_642F9ACB_74AE_AA75_41D7_0D5A0826F1F6_t.jpg",
  "hfovMax": 100,
  "pitch": 0,
  "label": "5. 360 ESCALERAS",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_642F9ACB_74AE_AA75_41D7_0D5A0826F1F6_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -97.5,
   "pitch": -9.19
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_64D10A57_74A3_AA1D_41AA_9A941353C88B",
  "class": "Panorama",
  "id": "panorama_7BCACD77_74AF_EE1D_41B0_52494C93AF56",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_7BCACD77_74AF_EE1D_41B0_52494C93AF56_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_7BCAFD77_74AF_EE1D_41D5_E9CD00CAB7CE",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_642F9ACB_74AE_AA75_41D7_0D5A0826F1F6, this.camera_7BD76C8C_74A3_AEF3_41D6_A13A7499E58F); this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": 154.41,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_7BCACD77_74AF_EE1D_41B0_52494C93AF56_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.94
       }
      ]
     }
    ],
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_7BCACD77_74AF_EE1D_41B0_52494C93AF56_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_7BCACD77_74AF_EE1D_41B0_52494C93AF56.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "thumbnailUrl": "media/panorama_7BCACD77_74AF_EE1D_41B0_52494C93AF56_t.jpg",
  "hfovMax": 100,
  "pitch": 0,
  "label": "6. 360 BA\u00d1O SOCIAL",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_7BCACD77_74AF_EE1D_41B0_52494C93AF56_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 2.83,
   "pitch": -0.41
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_64D10A57_74A3_AA1D_41AA_9A941353C88B",
  "class": "Panorama",
  "id": "panorama_64813651_74AF_5A15_41DB_B381890254F4",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_64813651_74AF_5A15_41DB_B381890254F4_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_64816651_74AF_5A15_41CE_76465417FACD",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_642F9ACB_74AE_AA75_41D7_0D5A0826F1F6, this.camera_7BC30CB1_74A3_AE15_41B8_AE47C86F213E); this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 7.59,
        "yaw": -172.43,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_64813651_74AF_5A15_41DB_B381890254F4_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 2.58
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_64817651_74AF_5A15_41D8_40EFE202222B",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_7B1E4F45_74AE_AA7D_418F_7B9CB1FDB4DD, this.camera_7BCEDC9F_74A3_AE0D_41DC_7442271CB268); this.mainPlayList.set('selectedIndex', 8)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 7.58,
        "yaw": -110.13,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_64813651_74AF_5A15_41DB_B381890254F4_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 4.08
       }
      ]
     }
    ],
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_64813651_74AF_5A15_41DB_B381890254F4_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_64813651_74AF_5A15_41DB_B381890254F4.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "thumbnailUrl": "media/panorama_64813651_74AF_5A15_41DB_B381890254F4_t.jpg",
  "hfovMax": 100,
  "pitch": 0,
  "label": "7. 360 HAB AUX",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_64813651_74AF_5A15_41DB_B381890254F4_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 2.85,
   "pitch": -0.51
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_64D10A57_74A3_AA1D_41AA_9A941353C88B",
  "class": "Panorama",
  "id": "panorama_7B1E4F45_74AE_AA7D_418F_7B9CB1FDB4DD",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_7B1E4F45_74AE_AA7D_418F_7B9CB1FDB4DD_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_7B11AF45_74AE_AA7D_41AC_CA106741354B",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_64813651_74AF_5A15_41DB_B381890254F4, this.camera_7BFE0C43_74A3_AE75_41DC_D8A18483AFEB); this.mainPlayList.set('selectedIndex', 7)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": 150.89,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_7B1E4F45_74AE_AA7D_418F_7B9CB1FDB4DD_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.19
       }
      ]
     }
    ],
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_7B1E4F45_74AE_AA7D_418F_7B9CB1FDB4DD_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_7B1E4F45_74AE_AA7D_418F_7B9CB1FDB4DD.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "thumbnailUrl": "media/panorama_7B1E4F45_74AE_AA7D_418F_7B9CB1FDB4DD_t.jpg",
  "hfovMax": 100,
  "pitch": 0,
  "label": "8. 360 BA\u00d1O HAB  AUX",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_7B1E4F45_74AE_AA7D_418F_7B9CB1FDB4DD_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 1.91,
   "pitch": 0.01
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_64D10A57_74A3_AA1D_41AA_9A941353C88B",
  "class": "Panorama",
  "id": "panorama_6410C36D_74AD_5A0D_41D5_6B0A6BE258FC",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_6410C36D_74AD_5A0D_41D5_6B0A6BE258FC_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_6410336D_74AD_5A0D_419F_94F293C40EED",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_7A0D12A7_74A2_DA3D_41DA_811333031F88, this.camera_65B59B59_74A3_AA15_41C6_4B33DFC37EF7); this.mainPlayList.set('selectedIndex', 12)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 7.59,
        "yaw": 132.55,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6410C36D_74AD_5A0D_41D5_6B0A6BE258FC_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 2.83
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_6410036D_74AD_5A0D_41B2_4FD29EE000D7",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_7AFAA3B9_74A2_DA15_41D8_0CF6F233B8AA, this.camera_6599DB81_74A3_AAF5_41DB_50731E0543A0); this.mainPlayList.set('selectedIndex', 10)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -149.57,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6410C36D_74AD_5A0D_41D5_6B0A6BE258FC_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 1.57
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_6410636D_74AD_5A0D_41D7_863699AAABE5",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_63A87952_6F37_6EAD_41B8_C09E59380861, this.camera_65A7CB6E_74A3_AA0F_41B6_34330EF0DCA1); this.mainPlayList.set('selectedIndex', 11)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": 11.21,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6410C36D_74AD_5A0D_41D5_6B0A6BE258FC_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 2.32
       }
      ]
     }
    ],
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_6410C36D_74AD_5A0D_41D5_6B0A6BE258FC_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_6410C36D_74AD_5A0D_41D5_6B0A6BE258FC.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "thumbnailUrl": "media/panorama_6410C36D_74AD_5A0D_41D5_6B0A6BE258FC_t.jpg",
  "hfovMax": 100,
  "pitch": 0,
  "label": "10. 360 HAB PPAL",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_6410C36D_74AD_5A0D_41D5_6B0A6BE258FC_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -4.38,
   "pitch": -3.32
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_64D10A57_74A3_AA1D_41AA_9A941353C88B",
  "class": "Panorama",
  "id": "panorama_7AFAA3B9_74A2_DA15_41D8_0CF6F233B8AA",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_7AFAA3B9_74A2_DA15_41D8_0CF6F233B8AA_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_7AFA83B9_74A2_DA15_41D7_A7E931324104",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6410C36D_74AD_5A0D_41D5_6B0A6BE258FC, this.camera_65882B94_74A3_AA13_41C9_3C388CEC47CB); this.mainPlayList.set('selectedIndex', 9)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 7.59,
        "yaw": 158.43,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_7AFAA3B9_74A2_DA15_41D8_0CF6F233B8AA_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 3.33
       }
      ]
     }
    ],
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_7AFAA3B9_74A2_DA15_41D8_0CF6F233B8AA_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_7AFAA3B9_74A2_DA15_41D8_0CF6F233B8AA.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "thumbnailUrl": "media/panorama_7AFAA3B9_74A2_DA15_41D8_0CF6F233B8AA_t.jpg",
  "hfovMax": 100,
  "pitch": 0,
  "label": "11. 360 BA\u00d1O PPAL",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_7AFAA3B9_74A2_DA15_41D8_0CF6F233B8AA_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -3.95,
   "pitch": 1.47
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_64D10A57_74A3_AA1D_41AA_9A941353C88B",
  "class": "Panorama",
  "id": "panorama_63A87952_6F37_6EAD_41B8_C09E59380861",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_63A87952_6F37_6EAD_41B8_C09E59380861_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_63A80953_6F37_6EAC_41C2_79F093EFE5FF",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6410C36D_74AD_5A0D_41D5_6B0A6BE258FC, this.camera_7BF5BC56_74A3_AE1F_41D6_FE541DD27AF7); this.mainPlayList.set('selectedIndex', 9)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 7.59,
        "yaw": -154.85,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_63A87952_6F37_6EAD_41B8_C09E59380861_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 2.58
       }
      ]
     }
    ],
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_63A87952_6F37_6EAD_41B8_C09E59380861_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_63A87952_6F37_6EAD_41B8_C09E59380861.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "thumbnailUrl": "media/panorama_63A87952_6F37_6EAD_41B8_C09E59380861_t.jpg",
  "hfovMax": 100,
  "pitch": 0,
  "label": "12. 360 balcon ppal",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_63A87952_6F37_6EAD_41B8_C09E59380861_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_64D10A57_74A3_AA1D_41AA_9A941353C88B",
  "class": "Panorama",
  "id": "panorama_7A0D12A7_74A2_DA3D_41DA_811333031F88",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_7A0D12A7_74A2_DA3D_41DA_811333031F88_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_7A0D32A8_74A2_DA33_41D1_2EBF0DFAA361",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6410C36D_74AD_5A0D_41D5_6B0A6BE258FC, this.camera_64249AC7_74A3_AA7D_41DD_0182F4CA37EA); this.mainPlayList.set('selectedIndex', 9)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -99.58,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_7A0D12A7_74A2_DA3D_41DA_811333031F88_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 1.82
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_7A0CC2A8_74A2_DA33_419E_D17A3E5E9271",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_642F9ACB_74AE_AA75_41D7_0D5A0826F1F6, this.camera_6416AADC_74A3_AA13_41D4_E74A56C0D6A4); this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 6.44,
        "yaw": -70.43,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_7A0D12A7_74A2_DA3D_41DA_811333031F88_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -32.09
       }
      ]
     }
    ],
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_7A0D12A7_74A2_DA3D_41DA_811333031F88_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_7A0D12A7_74A2_DA3D_41DA_811333031F88.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "thumbnailUrl": "media/panorama_7A0D12A7_74A2_DA3D_41DA_811333031F88_t.jpg",
  "hfovMax": 100,
  "pitch": 0,
  "label": "13 360 hall arriba",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_7A0D12A7_74A2_DA3D_41DA_811333031F88_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_64D10A57_74A3_AA1D_41AA_9A941353C88B",
  "class": "Panorama",
  "id": "panorama_7F8D023F_74BD_BA0D_417E_1180A03B8903",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_7F8D023F_74BD_BA0D_417E_1180A03B8903_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_7996DA43_74BE_EA75_41CA_16D080386A8E",
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_7AD10C1A_74A2_AE17_41CC_29DA07FBB19B, this.camera_6434FAA0_74A3_AA33_41C4_C8776E649099); this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -89.78,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_7F8D023F_74BD_BA0D_417E_1180A03B8903_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.69
       }
      ]
     }
    ],
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_7F8D023F_74BD_BA0D_417E_1180A03B8903_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_7F8D023F_74BD_BA0D_417E_1180A03B8903.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "thumbnailUrl": "media/panorama_7F8D023F_74BD_BA0D_417E_1180A03B8903_t.jpg",
  "hfovMax": 100,
  "pitch": 0,
  "label": "14. 360 BA\u00d1O PISCINAL",
  "partial": false,
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_7F8D023F_74BD_BA0D_417E_1180A03B8903_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 84.67,
   "pitch": -2.36
  }
 },
 {
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_7BB37475_74A3_DE1D_41D6_5976EBF88E7F",
    "camera": "this.panorama_7BB37475_74A3_DE1D_41D6_5976EBF88E7F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_63483777_6F29_6154_41DB_3760202A9DDC",
    "camera": "this.panorama_63483777_6F29_6154_41DB_3760202A9DDC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_613A17F4_6F2A_E154_41DA_9A0A3A8ED703",
    "camera": "this.panorama_613A17F4_6F2A_E154_41DA_9A0A3A8ED703_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_7AD10C1A_74A2_AE17_41CC_29DA07FBB19B",
    "camera": "this.panorama_7AD10C1A_74A2_AE17_41CC_29DA07FBB19B_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_7AD64D6E_74AE_AE0F_41B9_905730BF0835",
    "camera": "this.panorama_7AD64D6E_74AE_AE0F_41B9_905730BF0835_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_642F9ACB_74AE_AA75_41D7_0D5A0826F1F6",
    "camera": "this.panorama_642F9ACB_74AE_AA75_41D7_0D5A0826F1F6_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_7BCACD77_74AF_EE1D_41B0_52494C93AF56",
    "camera": "this.panorama_7BCACD77_74AF_EE1D_41B0_52494C93AF56_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_64813651_74AF_5A15_41DB_B381890254F4",
    "camera": "this.panorama_64813651_74AF_5A15_41DB_B381890254F4_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_7B1E4F45_74AE_AA7D_418F_7B9CB1FDB4DD",
    "camera": "this.panorama_7B1E4F45_74AE_AA7D_418F_7B9CB1FDB4DD_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.panorama_6410C36D_74AD_5A0D_41D5_6B0A6BE258FC",
    "camera": "this.panorama_6410C36D_74AD_5A0D_41D5_6B0A6BE258FC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "media": "this.panorama_7AFAA3B9_74A2_DA15_41D8_0CF6F233B8AA",
    "camera": "this.panorama_7AFAA3B9_74A2_DA15_41D8_0CF6F233B8AA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "media": "this.panorama_63A87952_6F37_6EAD_41B8_C09E59380861",
    "camera": "this.panorama_63A87952_6F37_6EAD_41B8_C09E59380861_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "media": "this.panorama_7A0D12A7_74A2_DA3D_41DA_811333031F88",
    "camera": "this.panorama_7A0D12A7_74A2_DA3D_41DA_811333031F88_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_7F8D023F_74BD_BA0D_417E_1180A03B8903",
    "camera": "this.panorama_7F8D023F_74BD_BA0D_417E_1180A03B8903_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 0)",
    "end": "this.trigger('tourEnded')",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 0, 1)",
    "media": "this.panorama_7BB37475_74A3_DE1D_41D6_5976EBF88E7F",
    "camera": "this.panorama_7BB37475_74A3_DE1D_41D6_5976EBF88E7F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 1, 2)",
    "media": "this.panorama_63483777_6F29_6154_41DB_3760202A9DDC",
    "camera": "this.panorama_63483777_6F29_6154_41DB_3760202A9DDC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 2, 3)",
    "media": "this.panorama_613A17F4_6F2A_E154_41DA_9A0A3A8ED703",
    "camera": "this.panorama_613A17F4_6F2A_E154_41DA_9A0A3A8ED703_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 3, 4)",
    "media": "this.panorama_7AD10C1A_74A2_AE17_41CC_29DA07FBB19B",
    "camera": "this.panorama_7AD10C1A_74A2_AE17_41CC_29DA07FBB19B_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 4, 5)",
    "media": "this.panorama_7AD64D6E_74AE_AE0F_41B9_905730BF0835",
    "camera": "this.panorama_7AD64D6E_74AE_AE0F_41B9_905730BF0835_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 5, 6)",
    "media": "this.panorama_642F9ACB_74AE_AA75_41D7_0D5A0826F1F6",
    "camera": "this.panorama_642F9ACB_74AE_AA75_41D7_0D5A0826F1F6_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 6, 7)",
    "media": "this.panorama_7BCACD77_74AF_EE1D_41B0_52494C93AF56",
    "camera": "this.panorama_7BCACD77_74AF_EE1D_41B0_52494C93AF56_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 7, 8)",
    "media": "this.panorama_64813651_74AF_5A15_41DB_B381890254F4",
    "camera": "this.panorama_64813651_74AF_5A15_41DB_B381890254F4_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 8, 9)",
    "media": "this.panorama_7B1E4F45_74AE_AA7D_418F_7B9CB1FDB4DD",
    "camera": "this.panorama_7B1E4F45_74AE_AA7D_418F_7B9CB1FDB4DD_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 9, 10)",
    "media": "this.panorama_6410C36D_74AD_5A0D_41D5_6B0A6BE258FC",
    "camera": "this.panorama_6410C36D_74AD_5A0D_41D5_6B0A6BE258FC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 10, 11)",
    "media": "this.panorama_7AFAA3B9_74A2_DA15_41D8_0CF6F233B8AA",
    "camera": "this.panorama_7AFAA3B9_74A2_DA15_41D8_0CF6F233B8AA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 11, 12)",
    "media": "this.panorama_63A87952_6F37_6EAD_41B8_C09E59380861",
    "camera": "this.panorama_63A87952_6F37_6EAD_41B8_C09E59380861_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 12, 13)",
    "media": "this.panorama_7A0D12A7_74A2_DA3D_41DA_811333031F88",
    "camera": "this.panorama_7A0D12A7_74A2_DA3D_41DA_811333031F88_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 13, 0)",
    "media": "this.panorama_7F8D023F_74BD_BA0D_417E_1180A03B8903",
    "camera": "this.panorama_7F8D023F_74BD_BA0D_417E_1180A03B8903_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "class": "PlayList"
 },
 "this.Menu_64D10A57_74A3_AA1D_41AA_9A941353C88B",
 {
  "id": "camera_6434FAA0_74A3_AA33_41C4_C8776E649099",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 7.57,
   "pitch": 0
  }
 },
 {
  "id": "camera_64249AC7_74A3_AA7D_41DD_0182F4CA37EA",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -47.45,
   "pitch": 0
  }
 },
 {
  "id": "camera_6416AADC_74A3_AA13_41D4_E74A56C0D6A4",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 169.86,
   "pitch": 0
  }
 },
 {
  "id": "camera_64085AEE_74A3_AA0F_41D2_4E0328B142E1",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -0.22,
   "pitch": 0
  }
 },
 {
  "id": "camera_647A9AFF_74A3_AA0D_41C4_707D82C4BBC5",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 179.66,
   "pitch": 0
  }
 },
 {
  "id": "camera_646CBB12_74A3_AA17_41D4_3796E8100347",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -0.22,
   "pitch": 0
  }
 },
 {
  "id": "camera_645EFB24_74A3_AA33_41D5_28CF8AB6EF4E",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -0.26,
   "pitch": 0
  }
 },
 {
  "id": "camera_64511B36_74A3_AA1F_41CB_8E628E8A9452",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 174.88,
   "pitch": 0
  }
 },
 {
  "id": "camera_6443AB47_74A3_AA7D_41A8_BF30E7914873",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -92.67,
   "pitch": 0
  }
 },
 {
  "id": "camera_65B59B59_74A3_AA15_41C6_4B33DFC37EF7",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 80.42,
   "pitch": 0
  }
 },
 {
  "id": "camera_65A7CB6E_74A3_AA0F_41B6_34330EF0DCA1",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 25.15,
   "pitch": 0
  }
 },
 {
  "id": "camera_6599DB81_74A3_AAF5_41DB_50731E0543A0",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -21.57,
   "pitch": 0
  }
 },
 {
  "id": "camera_65882B94_74A3_AA13_41C9_3C388CEC47CB",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 30.43,
   "pitch": 0
  }
 },
 {
  "id": "camera_7BAE2BD9_74A3_AA15_4194_C8BE4E1BADE0",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 109.57,
   "pitch": 0
  }
 },
 {
  "id": "camera_7BAA1BEB_74A3_AA35_41C0_F3471CA22FA7",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -25.59,
   "pitch": 0
  }
 },
 {
  "id": "camera_7BA41BFD_74A3_AA0D_41DB_2FA1D51A6CF1",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 65.6,
   "pitch": 0
  }
 },
 {
  "id": "camera_7B9CFC0E_74A3_AE0F_41D4_682EF3F36C0E",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 7.57,
   "pitch": 0
  }
 },
 {
  "id": "camera_7B928C20_74A3_AE33_41D3_63961A49559D",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 176.14,
   "pitch": 0
  }
 },
 {
  "id": "camera_7B886C32_74A3_AE17_41C8_623FDF4EE2F1",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -63.53,
   "pitch": 0
  }
 },
 {
  "id": "camera_7BFE0C43_74A3_AE75_41DC_D8A18483AFEB",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 69.87,
   "pitch": 0
  }
 },
 {
  "id": "camera_7BF5BC56_74A3_AE1F_41D6_FE541DD27AF7",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -168.79,
   "pitch": 0
  }
 },
 {
  "id": "camera_7BEB4C68_74A3_AE33_41CB_B9E72B8E9CF9",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 90.22,
   "pitch": 0
  }
 },
 {
  "id": "camera_7BE16C7A_74A3_AE17_41A7_EF0A66DB2478",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 126.9,
   "pitch": 0
  }
 },
 {
  "id": "camera_7BD76C8C_74A3_AEF3_41D6_A13A7499E58F",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -103.97,
   "pitch": 0
  }
 },
 {
  "id": "camera_7BCEDC9F_74A3_AE0D_41DC_7442271CB268",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": -29.11,
   "pitch": 0
  }
 },
 {
  "id": "camera_7BC30CB1_74A3_AE15_41B8_AE47C86F213E",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 100,
   "yaw": 96.5,
   "pitch": 0
  }
 },
 {
  "thumbnailUrl": "media/photo_7A1D2634_714C_3CEE_41D0_EA423895C904_t.jpg",
  "label": "1. EXT 1 - CABA\u00d1A VT1",
  "width": 160,
  "id": "photo_7A1D2634_714C_3CEE_41D0_EA423895C904",
  "duration": 5000,
  "class": "Photo",
  "height": 80,
  "image": {
   "levels": [
    {
     "url": "media/photo_7A1D2634_714C_3CEE_41D0_EA423895C904.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  }
 },
 {
  "thumbnailUrl": "media/photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B_t.jpg",
  "label": "2. EXT 2 - CABA\u00d1A VT1",
  "width": 1600,
  "id": "photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B",
  "duration": 5000,
  "class": "Photo",
  "height": 800,
  "image": {
   "levels": [
    {
     "url": "media/photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  }
 },
 {
  "thumbnailUrl": "media/photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469_t.jpg",
  "label": "3. EXT 3 - CABA\u00d1A VT1",
  "width": 1600,
  "id": "photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469",
  "duration": 5000,
  "class": "Photo",
  "height": 800,
  "image": {
   "levels": [
    {
     "url": "media/photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  }
 },
 {
  "thumbnailUrl": "media/photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC_t.jpg",
  "label": "4. INT 1 - CABA\u00d1A VT1",
  "width": 4000,
  "id": "photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC",
  "duration": 5000,
  "class": "Photo",
  "height": 2000,
  "image": {
   "levels": [
    {
     "url": "media/photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  }
 },
 {
  "thumbnailUrl": "media/photo_7394633D_781D_12D6_41A4_A0A677937A18_t.jpg",
  "label": "5. INT 2 - CABA\u00d1A VT1",
  "width": 4000,
  "id": "photo_7394633D_781D_12D6_41A4_A0A677937A18",
  "duration": 5000,
  "class": "Photo",
  "height": 2000,
  "image": {
   "levels": [
    {
     "url": "media/photo_7394633D_781D_12D6_41A4_A0A677937A18.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  }
 },
 {
  "thumbnailUrl": "media/photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6_t.jpg",
  "label": "6. EXT 4 - CABA\u00d1A VT1",
  "width": 4000,
  "id": "photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6",
  "duration": 5000,
  "class": "Photo",
  "height": 2000,
  "image": {
   "levels": [
    {
     "url": "media/photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  }
 },
 {
  "thumbnailUrl": "media/photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C_t.jpg",
  "label": "7. INT 3- CABA\u00d1A VT1",
  "width": 4000,
  "id": "photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C",
  "duration": 5000,
  "class": "Photo",
  "height": 2000,
  "image": {
   "levels": [
    {
     "url": "media/photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  }
 }
], "children": [
 {
  "progressBackgroundOpacity": 1,
  "toolTipBackgroundColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "paddingRight": 0,
  "playbackBarBorderRadius": 0,
  "playbackBarOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipTextShadowBlurRadius": 3,
  "progressBarOpacity": 1,
  "toolTipTextShadowVerticalLength": 0,
  "progressBottom": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeight": 10,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "shadow": false,
  "toolTipShadowBlurRadius": 3,
  "progressBorderSize": 0,
  "progressHeight": 10,
  "playbackBarHeadWidth": 6,
  "progressBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipOpacity": 0.7,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowColor": "#333333",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColorDirection": "vertical",
  "progressLeft": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipPaddingTop": 9,
  "toolTipBorderColor": "#767676",
  "toolTipTextShadowHorizontalLength": 0,
  "playbackBarProgressOpacity": 1,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "borderSize": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarRight": 0,
  "minHeight": 50,
  "playbackBarBorderSize": 0,
  "progressBarBorderSize": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundOpacity": 1,
  "transitionDuration": 500,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarLeft": 0,
  "paddingTop": 0,
  "toolTipBorderRadius": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipShadowSpread": 0,
  "minWidth": 100,
  "playbackBarBorderColor": "#FFFFFF",
  "width": "100%",
  "class": "ViewerArea",
  "height": "100%",
  "toolTipBorderSize": 0,
  "paddingBottom": 0,
  "paddingLeft": 0,
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "playbackBarHeadHeight": 15,
  "toolTipPaddingLeft": 14,
  "toolTipFontSize": 13,
  "progressBackgroundColorDirection": "vertical",
  "toolTipDisplayTime": 600,
  "toolTipFontColor": "#FFFFFF",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBorderRadius": 0,
  "progressBarBorderRadius": 0,
  "top": 0,
  "propagateClick": false,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipShadowOpacity": 0,
  "toolTipPaddingRight": 14,
  "playbackBarBottom": 5,
  "progressOpacity": 1,
  "progressRight": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBarBorderColor": "#000000",
  "playbackBarHeadShadowVerticalLength": 0,
  "id": "MainViewer",
  "playbackBarHeadShadow": true,
  "playbackBarHeadShadowColor": "#000000",
  "left": 0,
  "playbackBarHeadOpacity": 1,
  "transitionMode": "blending",
  "toolTipFontFamily": "Arial",
  "toolTipPaddingBottom": 9,
  "borderRadius": 0,
  "toolTipTextShadowOpacity": 1,
  "progressBorderColor": "#000000",
  "playbackBarHeadBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical"
 },
 {
  "children": [
   {
    "children": [
     "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
     {
      "toolTipBorderRadius": 1,
      "iconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA.png",
      "minWidth": 1,
      "toolTipBackgroundColor": "#000000",
      "width": "17.48%",
      "paddingRight": 0,
      "class": "IconButton",
      "height": "76.75%",
      "mode": "toggle",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipTextShadowVerticalLength": 0,
      "toolTip": "Full Screen",
      "maxWidth": 70,
      "paddingBottom": 0,
      "toolTipBorderSize": 0,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "shadow": false,
      "paddingLeft": 0,
      "toolTipPaddingLeft": 14,
      "toolTipFontSize": 13,
      "verticalAlign": "middle",
      "toolTipDisplayTime": 600,
      "toolTipShadowBlurRadius": 3,
      "toolTipOpacity": 0.7,
      "transparencyActive": true,
      "toolTipShadowOpacity": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowColor": "#333333",
      "toolTipFontColor": "#FFFFFF",
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "toolTipPaddingTop": 9,
      "toolTipBorderColor": "#767676",
      "toolTipPaddingRight": 14,
      "data": {
       "name": "Icon fullscreen"
      },
      "maxHeight": 70,
      "id": "IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
      "toolTipFontFamily": "Arial",
      "minHeight": 1,
      "borderRadius": 0,
      "borderSize": 0,
      "toolTipTextShadowHorizontalLength": 0,
      "pressedIconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA_pressed.png",
      "toolTipPaddingBottom": 9,
      "backgroundOpacity": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipShadowSpread": 0,
      "paddingTop": 0
     },
     {
      "toolTipBorderRadius": 1,
      "iconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930.png",
      "minWidth": 1,
      "toolTipBackgroundColor": "#000000",
      "width": "17.15%",
      "paddingRight": 0,
      "class": "IconButton",
      "height": "76.75%",
      "mode": "toggle",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipTextShadowVerticalLength": 0,
      "toolTip": "Audio On/Off",
      "maxWidth": 70,
      "paddingBottom": 0,
      "toolTipBorderSize": 0,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "shadow": false,
      "paddingLeft": 0,
      "toolTipPaddingLeft": 14,
      "toolTipFontSize": 13,
      "verticalAlign": "middle",
      "toolTipDisplayTime": 600,
      "toolTipShadowBlurRadius": 3,
      "toolTipOpacity": 0.7,
      "transparencyActive": true,
      "toolTipShadowOpacity": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowColor": "#333333",
      "toolTipFontColor": "#FFFFFF",
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "toolTipPaddingTop": 9,
      "toolTipBorderColor": "#767676",
      "toolTipPaddingRight": 14,
      "data": {
       "name": "Icon audio"
      },
      "maxHeight": 70,
      "id": "IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
      "toolTipFontFamily": "Arial",
      "minHeight": 1,
      "borderRadius": 0,
      "borderSize": 0,
      "toolTipTextShadowHorizontalLength": 0,
      "pressedIconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930_pressed.png",
      "toolTipPaddingBottom": 9,
      "backgroundOpacity": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipShadowSpread": 0,
      "paddingTop": 0
     }
    ],
    "gap": 10,
    "minWidth": 1,
    "scrollBarVisible": "rollOver",
    "width": "75.269%",
    "paddingRight": 0,
    "class": "Container",
    "height": "100%",
    "overflow": "visible",
    "paddingBottom": 0,
    "shadow": false,
    "paddingLeft": 0,
    "scrollBarWidth": 10,
    "verticalAlign": "middle",
    "layout": "horizontal",
    "scrollBarMargin": 2,
    "propagateClick": false,
    "scrollBarOpacity": 0.5,
    "horizontalAlign": "right",
    "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
    "data": {
     "name": "-Hide buttons"
    },
    "scrollBarColor": "#000000",
    "borderSize": 0,
    "minHeight": 1,
    "borderRadius": 0,
    "creationPolicy": "delayed",
    "backgroundOpacity": 0,
    "contentOpaque": false,
    "paddingTop": 0
   }
  ],
  "gap": 1,
  "minWidth": 265,
  "scrollBarVisible": "rollOver",
  "width": "22.545%",
  "paddingRight": 0,
  "class": "Container",
  "overflow": "visible",
  "paddingBottom": 0,
  "shadow": false,
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "verticalAlign": "middle",
  "top": "89%",
  "layout": "horizontal",
  "propagateClick": false,
  "scrollBarOpacity": 0.5,
  "bottom": "3%",
  "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
  "scrollBarMargin": 2,
  "data": {
   "name": "--Settings Button Set"
  },
  "horizontalAlign": "right",
  "scrollBarColor": "#000000",
  "borderSize": 0,
  "minHeight": 50,
  "borderRadius": 5,
  "creationPolicy": "delayed",
  "backgroundOpacity": 0,
  "contentOpaque": false,
  "right": 25,
  "paddingTop": 0
 },
 {
  "gap": 10,
  "minWidth": 300,
  "scrollBarVisible": "rollOver",
  "width": "21%",
  "paddingRight": 0,
  "class": "Container",
  "height": "25%",
  "overflow": "visible",
  "paddingBottom": 0,
  "shadow": false,
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "verticalAlign": "top",
  "top": "3.5%",
  "layout": "vertical",
  "propagateClick": false,
  "scrollBarOpacity": 0.5,
  "horizontalAlign": "left",
  "id": "Container_82CEEC30_9220_D3AB_41D9_A91DB817BCCC",
  "scrollBarMargin": 2,
  "data": {
   "name": "--Stickers Container"
  },
  "scrollBarColor": "#000000",
  "borderSize": 0,
  "minHeight": 120,
  "left": "2.14%",
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "contentOpaque": false,
  "creationPolicy": "delayed",
  "paddingTop": 0
 },
 {
  "selectedItemThumbnailShadow": true,
  "right": "2%",
  "selectedItemThumbnailShadowOpacity": 0.73,
  "backgroundColor": [
   "#000000"
  ],
  "itemHorizontalAlign": "center",
  "itemBackgroundColorDirection": "vertical",
  "paddingRight": 15,
  "itemBackgroundColor": [],
  "itemLabelHorizontalAlign": "center",
  "selectedItemThumbnailShadowBlurRadius": 10,
  "backgroundColorRatios": [
   0
  ],
  "maxWidth": 150,
  "selectedItemBackgroundColorRatios": [],
  "shadow": false,
  "itemBorderRadius": 0,
  "itemPaddingTop": 3,
  "selectedItemLabelFontWeight": "bold",
  "itemLabelFontFamily": "Arial",
  "itemLabelPosition": "bottom",
  "rollOverItemLabelFontColor": "#FFFFFF",
  "scrollBarMargin": 4,
  "scrollBarOpacity": 1,
  "itemThumbnailShadow": false,
  "scrollBarColor": "#52B7EF",
  "selectedItemBackgroundColor": [],
  "itemBackgroundOpacity": 0,
  "selectedItemBorderRadius": 0,
  "itemThumbnailWidth": 80,
  "borderSize": 0,
  "minHeight": 1,
  "rollOverItemLabelFontWeight": "bold",
  "itemLabelGap": 9,
  "itemLabelFontColor": "#FFFFFF",
  "backgroundColorDirection": "vertical",
  "paddingTop": 20,
  "gap": 10,
  "itemThumbnailBorderRadius": 50,
  "itemPaddingLeft": 3,
  "minWidth": 1,
  "itemVerticalAlign": "middle",
  "itemOpacity": 1,
  "selectedItemLabelFontStyle": "italic",
  "class": "ThumbnailList",
  "itemThumbnailOpacity": 1,
  "selectedItemBorderSize": 0,
  "selectedItemBackgroundOpacity": 0,
  "itemThumbnailScaleMode": "fit_outside",
  "paddingBottom": 20,
  "paddingLeft": 15,
  "scrollBarWidth": 7,
  "height": "82.127%",
  "itemPaddingRight": 3,
  "verticalAlign": "top",
  "rollOverItemLabelTextDecoration": "underline",
  "selectedItemLabelTextDecoration": "underline",
  "selectedItemThumbnailShadowHorizontalLength": 0,
  "top": "3.5%",
  "itemLabelFontWeight": "normal",
  "itemLabelTextDecoration": "none",
  "visible": false,
  "itemLabelFontStyle": "normal",
  "propagateClick": false,
  "itemPaddingBottom": 3,
  "horizontalAlign": "left",
  "layout": "vertical",
  "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "data": {
   "name": "-ThumbnailList"
  },
  "itemMode": "normal",
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
  "selectedItemThumbnailShadowVerticalLength": 0,
  "itemThumbnailHeight": 80,
  "itemBackgroundColorRatios": [],
  "selectedItemLabelFontColor": "#FFFFFF",
  "selectedItemLabelFontSize": 12,
  "borderRadius": 3,
  "itemLabelFontSize": 12,
  "scrollBarVisible": "rollOver",
  "backgroundOpacity": 0.25
 },
 {
  "children": [
   {
    "gap": 10,
    "minWidth": 1,
    "scrollBarVisible": "rollOver",
    "width": "100%",
    "paddingRight": 0,
    "class": "Container",
    "height": "55.435%",
    "overflow": "visible",
    "paddingBottom": 0,
    "shadow": false,
    "paddingLeft": 0,
    "scrollBarWidth": 10,
    "verticalAlign": "middle",
    "layout": "horizontal",
    "scrollBarMargin": 2,
    "propagateClick": false,
    "scrollBarOpacity": 0.5,
    "horizontalAlign": "left",
    "id": "Container_8BEA9761_974D_B047_41DA_8D05A7FEFD9B",
    "data": {
     "name": "Container Content"
    },
    "scrollBarColor": "#000000",
    "borderSize": 0,
    "minHeight": 1,
    "borderRadius": 0,
    "creationPolicy": "delayed",
    "backgroundOpacity": 0,
    "contentOpaque": false,
    "paddingTop": 0
   }
  ],
  "gap": 1,
  "minWidth": 1,
  "scrollBarVisible": "rollOver",
  "width": "37.394%",
  "paddingRight": 0,
  "class": "Container",
  "height": 92,
  "overflow": "visible",
  "paddingBottom": 0,
  "shadow": false,
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "verticalAlign": "bottom",
  "layout": "vertical",
  "scrollBarMargin": 2,
  "propagateClick": false,
  "scrollBarOpacity": 0.5,
  "bottom": "3%",
  "id": "Container_8A3F064F_9747_905B_41D4_9169FB3EB41E",
  "data": {
   "name": "-Discover Container"
  },
  "horizontalAlign": "left",
  "scrollBarColor": "#000000",
  "borderSize": 0,
  "minHeight": 1,
  "left": "2%",
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "contentOpaque": false,
  "creationPolicy": "delayed",
  "paddingTop": 0
 },
 {
  "minWidth": 1,
  "width": "5%",
  "paddingRight": 0,
  "class": "Image",
  "height": "5%",
  "url": "skin/Image_E75D7FB5_F538_3297_41CA_C93BFF557E4D.png",
  "maxWidth": 485,
  "paddingBottom": 0,
  "scaleMode": "fit_inside",
  "shadow": false,
  "paddingLeft": 0,
  "verticalAlign": "middle",
  "top": "0.98%",
  "propagateClick": false,
  "horizontalAlign": "center",
  "data": {
   "name": "Image21736"
  },
  "maxHeight": 265,
  "id": "Image_E75D7FB5_F538_3297_41CA_C93BFF557E4D",
  "minHeight": 1,
  "borderRadius": 0,
  "borderSize": 0,
  "backgroundOpacity": 0,
  "right": "0.6%",
  "paddingTop": 0
 }
], 
 "start": "this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "gap": 10,
 "buttonToggleMute": "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "paddingRight": 0,
 "class": "Player",
 "height": "100%",
 "overflow": "visible",
 "buttonToggleFullscreen": "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "paddingBottom": 0,
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "vrPolyfillScale": 0.85,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left",
 "id": "rootPlayer",
 "data": {
  "name": "Player463"
 },
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "minHeight": 20,
 "borderRadius": 0,
 "creationPolicy": "delayed",
 "contentOpaque": false,
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "scripts": {
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getKey": function(key){  return window[key]; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "existsKey": function(key){  return key in window; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "registerKey": function(key, value){  window[key] = value; },
  "unregisterKey": function(key){  delete window[key]; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; }
 },
 "paddingTop": 0
})