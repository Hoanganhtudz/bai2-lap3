var data: Array<any> = [
    {
        name: "túi dior",
        category_name: "túi xách",
        price: 1000000,
        sale_price: 800000,
        image: "../img/R.jpg",
    },
    {
        name: "jordan dior",
        category_name: "giày",
        price: 800000,
        sale_price: 500000,
        image: "../img/OIP.jpg",
    },
    {
        name: "mũ mlb",
        category_name: "mũ",
        price: 300000,
        sale_price: 150000,
        image: "../img/mlb.jpg",
    },
    {
        name: "thắt lưng ORAS",
        category_name: "thắt lưng",
        price: 1500000,
        sale_price: 1000000,
        image: "../img/B602-1.jpg",
    },
    {
        name: "sịp cánh mày râu cao cấp không mùi luxury",
        category_name: "quần sịp",
        price: 200000,
        sale_price: 100000,
        image: "../img/sip.webp",
    },
    {
        name: "khăn burberry",
        category_name: "khăn quàng",
        price: 300000,
        sale_price: 200000,
        image: "../img/OIP (1).jpg",
    },
];

function myDatas():Array<any> {
    return [
        {
            name: "túi dior",
            category_name: "túi xách",
            price: 1000000,
            sale_price: 800000,
            image: "../img/R.jpg",
        },
        {
            name: "jordan dior",
            category_name: "giày",
            price: 800000,
            sale_price: 500000,
            image: "../img/OIP.jpg",
        },
        {
            name: "mũ mlb",
            category_name: "mũ",
            price: 300000,
            sale_price: 150000,
            image: "../img/mlb.jpg",
        },
        {
            name: "thắt lưng ORAS",
            category_name: "thắt lưng",
            price: 1500000,
            sale_price: 1000000,
            image: "../img/B602-1.jpg",
        },
        {
            name: "sịp cánh mày râu cao cấp không mùi luxury",
            category_name: "quần sịp",
            price: 200000,
            sale_price: 100000,
            image: "../img/sip.webp",
        },
        {
            name: "khăn burberry",
            category_name: "khăn quàng",
            price: 300000,
            sale_price: 200000,
            image: "../img/OIP (1).jpg",
        },
    ];
};

var showProductList = function (data: any) {
    var _html = '';
    for (let key of data) {
        _html += `
            <tr>
                <th scope="row">${key.name}</th>
                <td>${key.category_name}</td>
                <td><del>${key.price}</del></td>
                <td>${key.sale_price}</td>
                <td><img src="${key.image}"/></td>
            </tr>
        `;
    }
    var _bodyList:any = document.getElementById("tbody-list");
    _bodyList.innerHTML = _html;
}
showProductList(data);

var dau:any = document.getElementById('dau');
var cuoi:any = document.getElementById('cuoi');
var btn_sort:any = document.getElementById('btn_sort');
btn_sort.onclick = function (){
    let first = dau.value;
    let second = cuoi.value;
    if (first==''|| second =='') {
        alert('vui lòng nhập giá trị')
    }
    let Filter = data.filter(function (obj) {
        return first <= obj.sale_price && obj.sale_price <= second; 
    });
    showProductList(Filter);
} 

var prices = (sort_type: string) => {
    let _myData = myDatas();
    if (sort_type == "ascending") {
        let studenSort = data.sort(function (a: any, b: any) {
            return a.sale_price < b.sale_price ? -1 : 0;
        });
        showProductList(studenSort);
    } else if (sort_type == "descending") {
        let studenSort = data.sort(function (a: any, b: any) {
            return a.sale_price > b.sale_price ? -1 : 0;
        });
        showProductList(studenSort);
    } else {
        showProductList(data);
    }
};

var input_class: any = document.getElementById("category");
var btn_filter: any = document.getElementById("btn");
btn_filter.onclick = function () {
    let cate = input_class.value;
    if (cate == "") {
        alert("VUi lòng nhập danh mục cần tìm");
        return;
    }

    let cateFilter = data.filter(function (obj) {
        return cate == obj.category_name;
    });
    showProductList(cateFilter);
};


