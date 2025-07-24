const PRODUCT_DATA_VERSION = '1.6';

// Data for all products
// This will be our "database" stored in localStorage

function getDefaultProducts() {
  return [
    // Main Courses
    {
      "id": 1, "name": "Phở Bò Tái Nạm", "desc": "Phở bò truyền thống với thịt bò tái và nạm, nước dùng đậm đà.", "price": 2.5, "img": "https://upload.wikimedia.org/wikipedia/commons/5/53/Ph%E1%BB%9F_b%C3%B2_t%C3%A1i_ch%C3%ADn_2.jpg", "category": "Main course", "rating": 4.9, "sold": 800, "isNew": true
    },
    {
      "id": 2, "name": "Bún Chả Hà Nội", "desc": "Thịt nướng thơm lừng ăn kèm bún, rau sống và nước mắm chua ngọt.", "price": 2.2, "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/B%C3%BAn_ch%E1%BA%A3_H%C3%A0_N%E1%BB%99i_t%E1%BA%A1i_qu%C3%A1n_%C4%90%E1%BA%AFc_Kim.jpg/1280px-B%C3%BAn_ch%E1%BA%A3_H%C3%A0_N%E1%BB%99i_t%E1%BA%A1i_qu%C3%A1n_%C4%90%E1%BA%AFc_Kim.jpg", "category": "Main course", "rating": 4.8, "sold": 650
    },
    {
      "id": 3, "name": "Cơm Tấm Sườn Bì Chả", "desc": "Dĩa cơm tấm đầy đủ với sườn nướng, bì, chả trứng và nước mắm.", "price": 2.0, "img": "https://upload.wikimedia.org/wikipedia/commons/0/01/C%C6%A1m_t%E1%BA%A5m_s%C6%B0%E1%BB%9Dn_b%C3%AC_ch%E1%BA%A3.jpg", "category": "Main course", "rating": 4.8, "sold": 950
    },
    {
      "id": 4, "name": "Bánh Mì Heo Quay", "desc": "Bánh mì giòn kẹp thịt heo quay đậm đà, đồ chua và rau thơm.", "price": 1.5, "img": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Banh_mi_thit_nuong%2C_a_Vietnamese_barbecue_pork_sandwich.jpg", "category": "Main course", "rating": 4.7, "sold": 1200
    },
    {
      "id": 5, "name": "Bún Bò Huế", "desc": "Bún bò cay nồng đặc sản Huế với giò heo, chả cua và tiết.", "price": 2.4, "img": "https://upload.wikimedia.org/wikipedia/commons/e/e8/B%C3%BAn_b%C3%B2_Hu%E1%BA%BF_1.jpg", "category": "Main course", "rating": 4.8, "sold": 720, "discount": 10, "oldPrice": 2.67
    },
    {
      "id": 6, "name": "Mì Quảng", "desc": "Sợi mì vàng óng đặc trưng của Quảng Nam, ăn cùng tôm, thịt, trứng cút.", "price": 2.1, "img": "https://upload.wikimedia.org/wikipedia/commons/9/9c/M%C3%AC_Qu%E1%BA%A3ng_t%C3%B4m_th%E1%BB%8Bt_tr%E1%BB%A9ng.jpg", "category": "Main course", "rating": 4.7, "sold": 550
    },
    {
      "id": 7, "name": "Hủ Tiếu Nam Vang", "desc": "Hủ tiếu có nguồn gốc từ Campuchia với tôm, thịt bằm, trứng cút và gan heo.", "price": 2.3, "img": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hu_Tieu_Nam_Vang.jpg", "category": "Main course", "rating": 4.8, "sold": 680, "isNew": true
    },
    {
      "id": 8, "name": "Bánh Canh Cua", "desc": "Bánh canh bột lọc dai ngon nấu cùng cua biển tươi và chả cua.", "price": 2.6, "img": "https://live.staticflickr.com/7222/7167683272_0dd837947d_b.jpg", "category": "Main course", "rating": 4.9, "sold": 600
    },
    {
      "id": 9, "name": "Gỏi Cuốn", "desc": "Bánh tráng cuốn tôm, thịt, bún và rau sống, chấm cùng mắm nêm hoặc tương.", "price": 1.2, "img": "https://upload.wikimedia.org/wikipedia/commons/4/45/Goi_cuon.jpg", "category": "Appetizer", "rating": 4.6, "sold": 1500
    },
    {
      "id": 10, "name": "Chả Giò (Nem Rán)", "desc": "Chả giò chiên giòn rụm với nhân thịt, mộc nhĩ, miến và rau củ.", "price": 1.3, "img": "logo-grabfood2.svg", "category": "Appetizer", "rating": 4.7, "sold": 1350
    },
    {
      "id": 11, "name": "Pizza Hải Sản", "desc": "Pizza đế giòn phủ đầy tôm, mực, thanh cua và phô mai mozzarella.", "price": 5.0, "img": "logo-grabfood2.svg", "category": "Main course", "rating": 4.7, "sold": 450, "discount": 15, "oldPrice": 5.88
    },
    {
      "id": 12, "name": "Mỳ Ý Sốt Bò Bằm", "desc": "Sợi mì Ý dai ngon hòa quyện cùng sốt cà chua và thịt bò bằm.", "price": 4.0, "img": "logo-grabfood2.svg", "category": "Main course", "rating": 4.6, "sold": 380
    },
    {
      "id": 13, "name": "Gà Rán Giòn Cay", "desc": "3 miếng gà rán tẩm ướp gia vị giòn cay hấp dẫn.", "price": 3.8, "img": "logo-grabfood2.svg", "category": "Main course", "rating": 4.8, "sold": 1500
    },
    {
      "id": 14, "name": "Cà Phê Sữa Đá", "desc": "Cà phê Robusta pha phin đậm đà cùng sữa đặc ngọt ngào.", "price": 1.2, "img": "logo-grabfood2.svg", "category": "Beverage", "rating": 4.9, "sold": 2000
    },
    {
      "id": 15, "name": "Trà Sữa Trân Châu", "desc": "Trà sữa Đài Loan thơm béo cùng trân châu đen dai ngon.", "price": 1.8, "img": "logo-grabfood2.svg", "category": "Beverage", "rating": 4.7, "sold": 1800
    },
    {
      "id": 16, "name": "Nước Cam Ép", "desc": "Nước cam tươi 100% nguyên chất, giàu Vitamin C.", "price": 1.5, "img": "logo-grabfood2.svg", "category": "Beverage", "rating": 4.8, "sold": 900
    },
    {
      "id": 17, "name": "Sinh Tố Bơ", "desc": "Bơ sáp béo ngậy xay mịn cùng sữa tươi và sữa đặc.", "price": 2.0, "img": "logo-grabfood2.svg", "category": "Beverage", "rating": 4.7, "sold": 750, "isNew": true
    },
    {
      "id": 18, "name": "Trà Đào Cam Sả", "desc": "Vị trà đào thanh mát kết hợp với cam và sả thơm dịu.", "price": 1.9, "img": "logo-grabfood2.svg", "category": "Beverage", "rating": 4.8, "sold": 1100
    },
    {
      "id": 19, "name": "Coca-Cola", "desc": "Nước ngọt có gas giải khát sảng khoái.", "price": 0.8, "img": "logo-grabfood2.svg", "category": "Beverage", "rating": 4.9, "sold": 5000
    },
    {
      "id": 20, "name": "Chè Khúc Bạch", "desc": "Chè thanh mát với khúc bạch phô mai, hạnh nhân và trái cây.", "price": 1.6, "img": "logo-grabfood2.svg", "category": "Dessert", "rating": 4.7, "sold": 500
    },
    {
      "id": 21, "name": "Bánh Flan Caramen", "desc": "Bánh flan mềm mịn, béo ngậy vị trứng sữa và caramen đắng nhẹ.", "price": 1.0, "img": "logo-grabfood2.svg", "category": "Dessert", "rating": 4.8, "sold": 800
    },
    {
      "id": 22, "name": "Tàu Hũ Nước Đường", "desc": "Tàu hũ mềm tan, ăn cùng nước đường gừng ấm nóng.", "price": 0.8, "img": "logo-grabfood2.svg", "category": "Dessert", "rating": 4.6, "sold": 600
    },
    {
      "id": 23, "name": "Rau Câu Dừa", "desc": "Thạch rau câu giòn mát với vị dừa tươi thanh ngọt.", "price": 0.9, "img": "logo-grabfood2.svg", "category": "Dessert", "rating": 4.7, "sold": 700, "isNew": true
    },
    {
      "id": 24, "name": "Combo Cơm Gà + Coca", "desc": "Một phần cơm gà xối mỡ và một lon Coca-Cola mát lạnh.", "price": 2.9, "img": "logo-grabfood2.svg", "category": "Combo", "rating": 4.8, "sold": 900, "discount": 10, "oldPrice": 3.22
    },
    {
      "id": 25, "name": "Combo 2 Bánh Mì + 2 Cafe", "desc": "2 Bánh mì heo quay và 2 ly cà phê sữa đá cho bữa sáng.", "price": 3.8, "img": "logo-grabfood2.svg", "category": "Combo", "rating": 4.7, "sold": 400
    },
    {
      "id": 26, "name": "Combo Pizza + Khoai Tây", "desc": "1 Pizza Hải Sản cỡ vừa và 1 phần khoai tây chiên.", "price": 5.9, "img": "logo-grabfood2.svg", "category": "Combo", "rating": 4.7, "sold": 550, "discount": 20, "oldPrice": 7.38
    },
    {
      "id": 27, "name": "Combo Gia Đình", "desc": "2 Gà Rán, 1 Mỳ Ý, 1 Khoai Tây Chiên, 2 Coca-Cola.", "price": 9.9, "img": "logo-grabfood2.svg", "category": "Combo", "rating": 4.8, "sold": 300, "isNew": true
    },
    {
      "id": 28, "name": "Combo Bún Chả 2 Người", "desc": "2 suất bún chả đầy đủ và 2 ly trà đá mát lạnh.", "price": 4.5, "img": "logo-grabfood2.svg", "category": "Combo", "rating": 4.8, "sold": 250
    },
    {
      "id": 29, "name": "Gỏi Cuốn Tôm Thịt", "desc": "Gỏi cuốn thanh mát với tôm, thịt, bún và rau sống, chấm mắm nêm.", "price": 1.5, "img": "logo-grabfood2.svg", "category": "Main course", "rating": 4.7, "sold": 600
    },
    {
      "id": 30, "name": "Sữa Chua Nếp Cẩm", "desc": "Sữa chua sánh mịn ăn cùng nếp cẩm dẻo thơm, tốt cho tiêu hoá.", "price": 1.3, "img": "logo-grabfood2.svg", "category": "Dessert", "rating": 4.8, "sold": 450
    }
  ];
} 