import React, { useEffect, useState } from "react";
import markerImageSrc from "../../assets/images/marker-default.png";

const { kakao } = window;

const patagonia_store = [
  {
    name: "대구칠곡직영점 (직영&아울렛)",
    addr: "대구 북구 칠곡중앙대로 379",
    phone: "053-327-3074",
    category: "Direct",
    latitude: "35.92951611886313",
    longitude: "128.54752000060458",
  },
  {
    name: "서울가로수길직영점",
    addr: "서울 강남구 도산대로15길 17",
    phone: "02-511-5383",
    category: "Direct",
    latitude: "37.519363600232545",
    longitude: "127.0237210202527",
  },
  {
    name: "서울도봉산직영점 (직영&아울렛)",
    addr: "서울 도봉구 도봉산길 57 1층",
    phone: "02-955-3933",
    category: "Direct",
    latitude: "37.68681752337899",
    longitude: "127.03923261445983",
  },
  {
    name: "서울성수낙낙직영점",
    addr: "서울 성동구 아차산로17길 48",
    phone: "02-3409-1907",
    category: "Direct",
  },
  {
    name: "서울성수낙낙직영점",
    addr: "서울 성동구 아차산로17길 48",
    phone: "02-3409-1907",
    category: "DepartmentStore",
    latitude: "37.546877470611044",
    longitude: "127.06627521431767",
  },
  {
    name: "AK원주점",
    addr: "강원 원주시 봉화로 1",
    phone: "033-811-5773",
    category: "DepartmentStore",
    latitude: "37.26610206825722",
    longitude: "127.00023675170556",
  },
  {
    name: "갤러리아광교점",
    addr: "경기 수원시 영통구 광교중앙로 124",
    phone: "031-5174-7730",
    category: "DepartmentStore",
    latitude: "37.28529166262822",
    longitude: "127.05721824116576",
  },
  {
    name: "갤러리아타임월드점",
    addr: "대전 서구 대덕대로 211 (갤러리아타임월드백화점) 8층",
    phone: "042-720-6838",
    category: "DepartmentStore",
    latitude: "36.35190712167286",
    longitude: "127.37826864380148",
  },
  {
    name: "더현대서울",
    addr: "서울 영등포구 여의대로 108 (파크원) 더현대서울 B2F",
    phone: "02-3277-8440",
    category: "DepartmentStore",
    latitude: "37.52668231278197",
    longitude: "126.92736495999928",
  },
  {
    name: "롯데광복점",
    addr: "부산 중구 중앙대로 2 롯데백화점광복점 7층",
    phone: "051-678-3783",
    category: "DepartmentStore",
    latitude: "35.098221149468394",
    longitude: "129.0366557824886",
  },
  {
    name: "롯데노원점",
    addr: "서울 노원구 동일로 1414 (롯데백화점) 6층",
    phone: "02-950-2519",
    category: "DepartmentStore",
    latitude: "37.65507335824865",
    longitude: "127.06129432952542",
  },
  {
    name: "롯데동탄점",
    addr: "경기도 화성시 동탄역로 160",
    phone: "031-8036-3907",
    category: "DepartmentStore",
    latitude: "37.20065669782624",
    longitude: "127.09811918357016",
  },
  {
    name: "롯데본점",
    addr: "서울 중구 남대문로 67",
    phone: "02-772-3629",
    category: "DepartmentStore",
    latitude: "37.56487407511512",
    longitude: "126.98181074982385",
  },
  {
    name: "롯데부산점",
    addr: "부산 부산진구 가야대로 772",
    phone: "051-810-3583",
    category: "DepartmentStore",
    latitude: "35.15699095352991",
    longitude: "129.05040975714155",
  },
  {
    name: "롯데영등포점",
    addr: "서울 영등포구 경인로 846 (영등포 민자역사) 롯데백화점 영등포점 6층",
    phone: "02-2164-6127",
    category: "DepartmentStore",
    latitude: "37.515977839902355",
    longitude: "126.90725806514706",
  },
  {
    name: "롯데울산점",
    addr: "울산 남구 삼산로 288 (롯데백화점, 울산고속버스터미널) 5층",
    phone: "052-960-4938",
    category: "DepartmentStore",
    latitude: "35.53864079192707",
    longitude: "129.33886069044493",
  },
  {
    name: "롯데인천터미널점",
    addr: "인천 미추홀구 연남로 35",
    phone: "032-242-2452",
    category: "DepartmentStore",
    latitude: "37.44218907894482",
    longitude: "126.7014136939825",
  },
  {
    name: "롯데잠실점",
    addr: "서울 송파구 올림픽로 240 롯데백화점 잠실점 6층",
    phone: "02-2143-7662",
    category: "DepartmentStore",
    latitude: "37.511781325276296",
    longitude: "127.09842038668646",
  },
  {
    name: "롯데잠실점 키즈",
    addr: "서울 송파구 올림픽로 240",
    phone: "02-2143-7882",
    category: "DepartmentStore",
    latitude: "37.51134480632425",
    longitude: "127.09785710771428",
  },
  {
    name: "롯데전주점",
    addr: "전북 전주시 완산구 온고을로 2 (롯데백화점) 롯데백화점 4층 파타고니아",
    phone: "063-289-3441",
    category: "DepartmentStore",
    latitude: "35.83446351790176",
    longitude: "127.12188472747135",
  },
  {
    name: "롯데창원점",
    addr: "경남 창원시 성산구 중앙대로 124 (롯데백화점) 4층",
    phone: "055-279-3427",
    category: "DepartmentStore",
    latitude: "35.224477928476254",
    longitude: "128.68185597789343",
  },
  {
    name: "롯데청량리점",
    addr: "서울 동대문구 왕산로 214",
    phone: "02-3707-1546",
    category: "DepartmentStore",
    latitude: "37.5808787805566",
    longitude: "127.04767916626794",
  },
  {
    name: "롯데평촌점",
    addr: "경기 안양시 동안구 시민대로 180 (G.SQURE, 롯데백화점 평촌점) 4층",
    phone: "031-8086-9415",
    category: "DepartmentStore",
    latitude: "37.39048373500818",
    longitude: "126.95051066292484",
  },
  {
    name: "롯데포항점",
    addr: "경북 포항시 북구 학산로 62 (롯데백화점) 5층 파타고니아",
    phone: "054-230-1573",
    category: "DepartmentStore",
    latitude: "36.04968156484227",
    longitude: "129.36962040216127",
  },
  {
    name: "신세계강남점",
    addr: "서울 서초구 신반포로 176",
    phone: "02-3479-1166",
    category: "DepartmentStore",
    latitude: "37.50472008468271",
    longitude: "127.00415065038597",
  },
  {
    name: "신세계강남점 키즈",
    addr: "서울 서초구 신반포로 176",
    phone: "02-3479-1783",
    category: "DepartmentStore",
    latitude: "37.50482595261763",
    longitude: "127.00415631109205 ",
  },
  {
    name: "신세계경기점",
    addr: "경기 용인시 수지구 포은대로 536 ((주)신세계백화점경기점) 주차동(스포츠관) 8층",
    phone: "031-695-1331",
    category: "DepartmentStore",
    latitude: "37.32503002821012",
    longitude: "127.10816711561301",
  },
  {
    name: "신세계광주점",
    addr: "광주 서구 무진대로 932 (신세계백화점) 광주점 본관 7층",
    phone: "062-360-1381",
    category: "DepartmentStore",
    latitude: "35.1605911868085",
    longitude: "126.8826741178404",
  },
  {
    name: "신세계김해점",
    addr: "경남 김해시 외동 1264 신세계백화점 3층",
    phone: "055-272-1868",
    category: "DepartmentStore",
    latitude: "35.228748802477035",
    longitude: "128.87245864905393",
  },
  {
    name: "신세계대구점",
    addr: "대구 동구 동부로 149 (신천동, 신세계동대구복합환승센터) 신세계 백화점 6층",
    phone: "053-661-6552",
    category: "DepartmentStore",
    latitude: "35.877738448537656",
    longitude: "128.62895812192662",
  },
  {
    name: "신세계대전점",
    addr: "대전 유성구 엑스포로 1",
    phone: "042-607-8475",
    category: "DepartmentStore",
    latitude: "36.375232698593464",
    longitude: "127.38150741686046",
  },
  {
    name: "신세계본점",
    addr: "서울 중구 소공로 63 (신세계백화점건물) 5층",
    phone: "02-310-1332",
    category: "DepartmentStore",
    latitude: "37.56090506190466",
    longitude: "126.98102510254769",
  },
  {
    name: "신세계센텀시티",
    addr: "부산 해운대구 센텀4로 15 (센텀시티 몰)",
    phone: "051-745-1515",
    category: "DepartmentStore",
    latitude: "35.1699068916397",
    longitude: "129.1282256190105",
  },
  {
    name: "신세계의정부점",
    addr: "경기 의정부시 시민로 지하 100 (의정부지하상가) 7층",
    phone: "031-8082-0748",
    category: "DepartmentStore",
    latitude: "37.76944393984999",
    longitude: "126.69639698775276",
  },
  {
    name: "신세계천안아산점",
    addr: "충남 천안시 동남구 만남로 43 신세계백화점 B관 3층",
    phone: "041-640-5346",
    category: "DepartmentStore",
    latitude: "36.819471510485286",
    longitude: "127.15606629959788",
  },
  {
    name: "신세계타임스퀘어점",
    addr: "서울 영등포구 영중로 9 (신세계백화점) A관 7층",
    phone: "02-2639-4052",
    category: "DepartmentStore",
    latitude: "37.51711862670901",
    longitude: "126.90569848859806",
  },
  {
    name: "아이파크몰",
    addr: "서울 용산구 한강대로23길 55 (용산역) 아이파크몰 패션파크 5층 파타고니아",
    phone: "02-2012-4556",
    category: "DepartmentStore",
    latitude: "37.52983256659709",
    longitude: "126.96456622932328",
  },
  {
    name: "현대목동점",
    addr: "서울 양천구 목동동로 257 현대백화점 U-PLEX 지하 2층 파타고니아",
    phone: "02-2163-3566",
    category: "DepartmentStore",
    latitude: "37.526415546399974",
    longitude: "126.87504285216714",
  },
  {
    name: "현대본점",
    addr: "서울 강남구 압구정로 165",
    phone: "02-3438-6139",
    category: "DepartmentStore",
    latitude: "37.527440281075116",
    longitude: "127.027445588431",
  },
  {
    name: "현대신촌점",
    addr: "서울 서대문구 신촌로 83 (현대백화점신촌점) 8층",
    phone: "02-3145-2724",
    category: "DepartmentStore",
    latitude: "37.556091354508524",
    longitude: "126.9358584503141",
  },
  {
    name: "현대울산점",
    addr: "울산 남구 삼산로 261",
    phone: "052-228-0908",
    category: "DepartmentStore",
    latitude: "35.539579293764135",
    longitude: "129.33576810191767",
  },
  {
    name: "현대중동점",
    addr: "경기 부천시 길주로 172",
    phone: "032-623-2652",
    category: "DepartmentStore",
    latitude: "37.50454395877649",
    longitude: "126.76112628836557",
  },
  {
    name: "현대천호점",
    addr: "서울 강동구 천호대로 1005 (현대백화점) 7층 파타고니아",
    phone: "02-2225-7781",
    category: "DepartmentStore",
    latitude: "37.53888153325218",
    longitude: "127.12434714610134",
  },
  {
    name: "현대킨텍스점",
    addr: "경기 고양시 일산서구 호수로 817",
    phone: "031-822-3545",
    category: "DepartmentStore",
    latitude: "37.66820404044091",
    longitude: "126.75112432604107",
  },
  {
    name: "현대판교점",
    addr: "경기 성남시 분당구 판교역로146번길 20 (현대백화점판교점) 4층 파타고니아",
    phone: "031-5170-1753",
    category: "DepartmentStore",
    latitude: "37.39274989528224",
    longitude: "127.11202768016618",
  },
  {
    name: "스타필드고양점",
    addr: "경기 고양시 덕양구 고양대로 1955",
    phone: "031-5173-1808",
    category: "Mall",
    latitude: "37.64696276815175",
    longitude: "126.89475009728436",
  },
  {
    name: "스타필드안성점",
    addr: "경기 안성시 공도읍 서동대로 3980 스타필드 1층",
    phone: "031-8092-1451",
    category: "Mall",
    latitude: "36.99472249871782",
    longitude: "127.14792538679325",
  },
  {
    name: "스타필드하남점",
    addr: "경기 하남시 미사대로 750 (스타필드하남) 1층",
    phone: "031-8072-8496",
    category: "Mall",
    latitude: "37.545866782786334",
    longitude: "127.22236835769533",
  },
  {
    name: "타임빌라스 수원점",
    addr: "경기 수원시 권선구 세화로 134",
    phone: "031-8066-0560",
    category: "Mall",
    latitude: "37.2647",
    longitude: "126.9983",
  },
  {
    name: "트리플스트리트송도점",
    addr: "인천 연수구 송도과학로16번길 33-3 (송도 트리플스트리트)",
    phone: "032-310-9585",
    category: "Mall",
    latitude: "37.37972983996059",
    longitude: "126.6610145050503",
  },
  {
    name: "광주충장로점",
    addr: "광주 동구 충장로 70-1",
    phone: "062-236-6522",
    category: "Agency",
    latitude: "35.148823958375566",
    longitude: "126.9151088642504",
  },
  {
    name: "대구동성로점",
    addr: "대구 중구 동성로 11",
    phone: "053-428-1224",
    category: "Agency",
    latitude: "35.868014958889866",
    longitude: "128.5943887112715",
  },
  {
    name: "대전은행점",
    addr: "대전 중구 중앙로170번길 38",
    phone: "042-256-6990",
    category: "Agency",
    latitude: "36.328047396347074",
    longitude: "127.42927286766606",
  },
  {
    name: "서울홀라인점",
    addr: "서울 마포구 독막로15길 7",
    phone: "02-337-3907",
    category: "Agency",
    latitude: "37.54823531509193",
    longitude: "126.92199146847706",
  },
  {
    name: "양양점",
    addr: "강원 양양군 현남면 인구중앙길 67 타일러 서프",
    phone: "033-671-8048",
    category: "Agency",
    latitude: "37.97077196203515",
    longitude: "128.76031369335166 ",
  },
  {
    name: "울산영남알프스점",
    addr: "울산광역시 울주군 상북면 등억알프스로 341",
    phone: "052-264-6660",
    category: "Agency",
    latitude: "35.556038167924484",
    longitude: "129.08112200555186",
  },
  {
    name: "청주순환로점",
    addr: "충북 청주시 흥덕구 2순환로 1020 (지원상가) 101호",
    phone: "043-235-1973",
    category: "Agency",
    latitude: "36.64371532498667",
    longitude: "127.42211119676166",
  },
  {
    name: "롯데아울렛기흥점",
    addr: "경기 용인시 기흥구 신고매로 124",
    phone: "031-8036-3259",
    category: "Outlet",
    latitude: "37.22510128284443",
    longitude: "127.12099908190375",
  },
  {
    name: "롯데아울렛김해점",
    addr: "경남 김해시 신문동 1414 롯데프리미엄아울렛김해점 2층",
    phone: "055-900-2395",
    category: "Outlet",
    latitude: "35.18505660000011",
    longitude: "128.82798679999937",
  },
  {
    name: "롯데아울렛동부산점",
    addr: "부산 기장군 기장읍 기장해안로 147 (롯데몰동부산점) 2층",
    phone: "051-901-2577",
    category: "Outlet",
    latitude: "35.1925057922944",
    longitude: "129.21201851358245",
  },
  {
    name: "롯데아울렛의왕점",
    addr: "경기 의왕시 바라산로 1 롯데아울렛 의왕점 2층",
    phone: "031-329-4027",
    category: "Outlet",
    latitude: "37.37596020101876",
    longitude: "127.00939354005712",
  },
  {
    name: "롯데아울렛이천점",
    addr: "경기 이천시 호법면 프리미엄아울렛로 177-74 (롯데 프리미엄 아울렛)",
    phone: "031-887-4819",
    category: "Outlet",
    latitude: "37.24231272578029",
    longitude: "127.400592311179",
  },
  {
    name: "롯데아울렛파주점",
    addr: "경기 파주시 회동길 390 (롯데프리미엄아울렛)",
    phone: "031-960-2929",
    category: "Outlet",
    latitude: "37.71774204109806",
    longitude: "126.69378962964329",
  },
  {
    name: "신세계아울렛여주점",
    addr: "경기 여주시 명품로 360",
    phone: "031-880-1630",
    category: "Outlet",
    latitude: "37.24178622500079",
    longitude: "127.61220344637498",
  },
  {
    name: "신세계아울렛파주점",
    addr: "경기 파주시 탄현면 필승로 200 (파주프리미엄아울렛) 313호",
    phone: "031-8071-7178",
    category: "Outlet",
    latitude: "37.76944393984999",
    longitude: "126.69639698775276",
  },
  {
    name: "현대아울렛 스페이스원",
    addr: "경기 남양주시 다산순환로 50",
    phone: "031-8078-2395",
    category: "Outlet",
    latitude: "37.616178583678646",
    longitude: "127.15247209234629",
  },
  {
    name: "현대아울렛김포점",
    addr: "경기 김포시 고촌읍 아라육로152번길 100",
    phone: "031-8048-2800",
    category: "Outlet",
    latitude: "37.59954446314383",
    longitude: "126.78547804650279",
  },
  {
    name: "현대아울렛대전점",
    addr: "대전 유성구 테크노중앙로 123 (현대프리미엄아울렛대전점) 3층",
    phone: "042-332-2566",
    category: "Outlet",
    latitude: "36.423682450834434",
    longitude: "127.39852627412212",
  },
];

//전체 매장에서 매장 특성에 따라 filter처리
const Direct = patagonia_store.filter((item) => item.category === "Direct");
const DepartmentStore = patagonia_store.filter(
  (item) => item.category === "DepartmentStore"
);
const Mall = patagonia_store.filter((item) => item.category === "Mall");
const Agency = patagonia_store.filter((item) => item.category === "Agency");
const Outlet = patagonia_store.filter((item) => item.category === "Outlet");

//주소별로 나누기 위해 주소 앞 두 글자 slice
function MapComp() {
  const [selectedCity, setSelectedCity] = useState("");
  const filteredStores = patagonia_store.filter(
    (store) => store.addr.slice(0, 2) === selectedCity
  );

  const [storeInfo, setStoreInfo] = useState(patagonia_store);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchFilter, setSearchFilter] = useState([]);
  const [searchFilter2, setSearchFilter2] = useState(null);
  const [selectedStore, setSelectedStore] = useState(null);

  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  //매장 주소 검색 부분 처리하는 함수
  const handleInputChange = (e) => {
    const input = e.target.value;
    setSearchTerm(input);

    const filtered = patagonia_store.filter((store) => {
      return store.addr.includes(input);
    });
    setSearchFilter(filtered);
  };

  // Enter 키를 눌렀을 때 호출될 함수
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // 입력 필드에서 Enter 키를 눌렀을 때 검색 필터 출력
      const filtered = patagonia_store.filter((store) => {
        return store.addr.includes(searchTerm);
      });
      setSearchFilter2(filtered);
    }
  };

  const handleStoreClick = (addr) => {
    const store = patagonia_store.find((s) => s.addr === addr);
    if (store && map) {
      const position = new kakao.maps.LatLng(
        parseFloat(store.latitude),
        parseFloat(store.longitude)
      );

      map.setCenter(position); //검색한 매장을 중심으로 지도 위치 옮기는 부분

      //검색한 매장의 마커만 보여주고 다른 매장의 마커 지우는 부분
      markers.forEach((marker) => {
        if (marker.getPosition().equals(position)) {
          marker.setMap(map);
        } else {
          marker.setMap(null);
        }
      });

      setSelectedStore(store);

      setTimeout(() => {
        setSelectedStore(null);
      }, 3000);
    }
  };

  useEffect(() => {
    const mapContainer = document.getElementById("map");
    const mapOption = {
      center: new kakao.maps.LatLng(37.5193278, 127.0236615),
      level: 7,
    };

    const createdMap = new kakao.maps.Map(mapContainer, mapOption);
    setMap(createdMap); // map 상태로 저장

    //매장들의 정보 가져오기
    const positions = patagonia_store.map((store) => ({
      title: store.name,
      addr: store.addr,
      latlng: new kakao.maps.LatLng(
        parseFloat(store.latitude),
        parseFloat(store.longitude)
      ),
    }));

    const imageSrc = markerImageSrc;
    const createdMarkers = []; // 생성된 마커들을 저장할 배열

    const infowindow = new kakao.maps.InfoWindow({
      removable: false,
    });

    positions.forEach((position) => {
      const imageSize = new kakao.maps.Size(24, 35);
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      const marker = new kakao.maps.Marker({
        map: createdMap, // 마커를 지도에 바로 추가
        position: position.latlng,
        title: position.title,
        addr: position.addr,
        image: markerImage,
        clickable: true,
      });

      // 마커 클릭 이벤트 등록
      kakao.maps.event.addListener(marker, "click", function () {
        const iwContent = `<div style="padding: 20px; text-align: center; white-space: nowrap;"><strong>${position.title}</strong></div>`;
        infowindow.setContent(iwContent);
        infowindow.open(createdMap, marker); // 인포윈도우를 지도에 표시

        // 선택된 마커의 정보를 상태로 저장
        setStoreInfo([{ title: position.title, addr: position.addr }]);
      });

      createdMarkers.push(marker); // 마커 배열에 추가
    });

    // createdMarkers 배열에 마커가 잘 추가되었는지 확인
    console.log("Created markers:", createdMarkers);
    setMarkers(createdMarkers); // 마커 상태로 저장

    const updateMarkersInView = () => {
      const bounds = createdMap.getBounds();
      const visibleMarkers = positions.filter((position) => {
        const latLng = position.latlng;
        return bounds.contain(latLng); // 현재 지도 영역에 포함된 마커들만 필터링
      });

      setStoreInfo(visibleMarkers); // 보이는 마커들의 정보를 저장
    };

    //줌인 줌아웃시 정해진 반경안에 해당하는 매장 보여주기
    kakao.maps.event.addListener(
      createdMap,
      "zoom_changed",
      updateMarkersInView
    );
    kakao.maps.event.addListener(createdMap, "dragend", updateMarkersInView);

    updateMarkersInView(); // 초기 로딩 시 보이는 마커 업데이트
  }, []);

  return (
    <>
      <div className="flex">
        <div className="container w-full md:w-1/4 h-screen">
          <div
            className="bg-black relative"
            style={{ height: "9.7rem", padding: "1.4rem 1rem" }}
          >
            <div className="relative w-full h-full block">
              <span
                className="map_store absolute"
                style={{
                  top: "50%",
                  left: "2.5rem",
                  width: "2.8rem",
                  height: "2.8rem",
                  marginTop: "-1.4rem",
                }}
              ></span>
              <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                style={{
                  color: "#a9a9a9",
                  borderRadius: "2.5rem",
                  height: "5.8rem",
                  paddingLeft: "6rem",
                  fontSize: "1.2rem",
                  background: "#fafafa",
                  transition: "background 250ms ease-out",
                }}
                className="w-full pr-6 mb-2"
              />

              {searchTerm && !selectedStore && (
                <div className="block left-4 top-32 w-full h-80 bg-white overflow-y-auto shadow-[0_0_14px_rgba(0,0,0,0.3)]">
                  {searchFilter.length > 0 ? (
                    searchFilter.map((store, index) => {
                      const { addr } = store;
                      const parts = addr.split(new RegExp(`(${searchTerm})`)); // searchTerm을 기준으로 분리
                      return (
                        <p
                          key={index}
                          className="w-full font-normal cursor-pointer px-6 py-7 border-b border-[#d4cec9] text-[#837c77] text-lg"
                          onClick={() => handleStoreClick(addr)}
                        >
                          {parts.map((part, i) =>
                            part === searchTerm ? (
                              <strong key={i} className="text-black">
                                {part}
                              </strong> // 검색한 단어만 강조
                            ) : (
                              part // 나머지 부분은 그냥 출력
                            )
                          )}
                        </p>
                      );
                    })
                  ) : (
                    <p className="text-black flex justify-center items-center font-bold h-full text-xl">
                      매장이 없습니다
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          <div
            style={{
              padding: "1rem",
              background: "#f7f6f5",
              height: "85vh",
              overflowY: "auto",
            }}
          >
            {selectedStore && (
              <div
                className="flex items-stretch flex-wrap p-8 bg-white cursor-pointer "
                style={{
                  borderRadius: "8px",
                  color: "#595959",
                  marginBottom: "1rem",
                }}
              >
                <div className="flex w-full">
                  <div className="flex-grow" style={{ paddingRight: "1rem" }}>
                    <h4
                      className="font-bold text-black pb-4"
                      style={{ fontSize: "1.2rem", lineHeight: "1.15em" }}
                    >
                      {selectedStore.name}
                    </h4>
                    <address
                      className="block text-black font-normal"
                      style={{
                        marginBottom: "0.625rem",
                        fontSize: "0.8rem",
                        lineHeight: "1.15",
                      }}
                    >
                      {selectedStore.addr}
                    </address>
                  </div>
                  <div className="flex flex-col justify-center min-w-[60px] pl-4 border-l border-[#d9d4cf] leading-[1.15] text-center box-border">
                    <span className="block w-4 h-4 mx-auto mb-2 map_distance"></span>
                  </div>
                </div>
                <div
                  className="flex justify-center items-center w-full font-bold bg-white"
                  style={{
                    height: "4rem",
                    marginTop: "2rem",
                    borderRadius: "30px",
                    border: "2px solid #000000",
                    fontSize: "1rem",
                  }}
                >
                  Store Details
                </div>
              </div>
            )}
            {!selectedStore &&
              storeInfo.map((store, index) => (
                <div
                  key={index}
                  className="flex items-stretch flex-wrap p-8 bg-white cursor-pointer "
                  style={{
                    borderRadius: "8px",
                    color: "#595959",
                    marginBottom: "1rem",
                  }}
                >
                  <div className="flex w-full">
                    <div className="flex-grow" style={{ paddingRight: "1rem" }}>
                      <h4
                        className="font-bold text-black pb-4"
                        style={{ fontSize: "1.2rem", lineHeight: "1.15em" }}
                      >
                        {store.title}
                      </h4>
                      <address
                        className="block text-black font-normal"
                        style={{
                          marginBottom: "0.625rem",
                          fontSize: "0.8rem",
                          lineHeight: "1.15",
                        }}
                      >
                        {store.addr}
                      </address>
                    </div>
                    <div className="flex flex-col justify-center min-w-[60px] pl-4 border-l border-[#d9d4cf] leading-[1.15] text-center box-border">
                      <span className="block w-4 h-4 mx-auto mb-2 map_distance"></span>
                    </div>
                  </div>
                  <div
                    className="flex justify-center items-center w-full font-bold bg-white"
                    style={{
                      height: "4rem",
                      marginTop: "2rem",
                      borderRadius: "30px",
                      border: "2px solid #000000",
                      fontSize: "1rem",
                    }}
                  >
                    Store Details
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div id="map" className="hidden md:block md:w-3/4 h-screen"></div>
      </div>
      <section style={{ paddingLeft: "6rem", paddingRight: "6rem" }}>
        <div
          className="title text-center"
          style={{ margin: "4rem 0 2.5rem", borderTop: "0.1rem solid #cccccc" }}
        >
          <h3
            className="relative inline-block font-bold text-3xl px-8 tracking-wide bg-white whitespace-pre-wrap"
            style={{ top: "-1rem" }}
          >
            Patagonia Retail Stores
          </h3>
        </div>
        <form>
          <div
            className="inline-block w-full font-normal text-center"
            style={{ marginBottom: "1rem", fontSize: "1.4rem" }}
          >
            <span className="font-extrabold">지역을 선택하세요</span>
          </div>
        </form>
        <select
          name="local_si"
          id="city"
          className="block w-full"
          style={{
            height: "4.2rem",
            marginBottom: "0.5rem",
            padding: "0.9rem 4.5rem 0.9rem 2.4rem",
            color: "#555555",
            fontSize: "1rem",
            lineHeight: "1.4286",
            border: "0.1rem solid #cccccc",
          }}
          onChange={(e) => {
            setSelectedCity(e.target.value);
          }}
        >
          <option value="">전체</option>
          <option value="서울">서울</option>
          <option value="경기">경기</option>
          <option value="인천">인천</option>
          <option value="부산">부산</option>
          <option value="대구">대구</option>
          <option value="광주">광주</option>
          <option value="대전">대전</option>
          <option value="울산">울산</option>
          <option value="세종">세종</option>
          <option value="강원">강원</option>
          <option value="충남">충남</option>
          <option value="충북">충북</option>
          <option value="전남">전남</option>
          <option value="전북">전북</option>
          <option value="경남">경남</option>
          <option value="경북">경북</option>
          <option value="제주">제주</option>
        </select>
        <div>
          {selectedCity === "" ? (
            <>
              {/* 전체 매장 */}
              <div className="container py-0 px-[0.8rem]">
                <p className="block w-full font-bold text-[1.4rem] py-6">
                  직영점
                </p>
                <div className="grid sm:grid-cols-1 sm-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {Direct.map((item, i) => (
                    <div
                      className="bg-white text-[1rem] h-[14rem] pr-10"
                      key={i}
                    >
                      <p className="text-[#fa4616] font-bold hover:text-black cursor-pointer">
                        {item.name}
                      </p>
                      <p className="font-normal">{item.addr}</p>
                      <p className="text-[#fa4616] font-normal hover:text-black cursor-pointer">
                        {item.phone}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 다른 카테고리들 */}
              <div className="container py-0 px-[0.8rem]">
                <p className="block w-full font-bold text-[1.4rem] py-6">
                  백화점
                </p>
                <div className="grid sm:grid-cols-1 sm-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {DepartmentStore.map((item, i) => (
                    <div
                      className="bg-white text-[1rem] h-[14rem] pr-10"
                      key={i}
                    >
                      <p className="text-[#fa4616] font-bold hover:text-black cursor-pointer">
                        {item.name}
                      </p>
                      <p className="font-normal">{item.addr}</p>
                      <p className="text-[#fa4616] font-normal hover:text-black cursor-pointer">
                        {item.phone}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="container py-0 px-[0.8rem]">
                <p className="block w-full font-bold text-[1.4rem] py-6">몰</p>
                <div className="grid sm:grid-cols-1 sm-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {Mall.map((item, i) => (
                    <div
                      className="bg-white text-[1rem] h-[14rem] pr-10"
                      key={i}
                    >
                      <p className="text-[#fa4616] font-bold hover:text-black cursor-pointer">
                        {item.name}
                      </p>
                      <p className="font-normal">{item.addr}</p>
                      <p className="text-[#fa4616] font-normal hover:text-black cursor-pointer">
                        {item.phone}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="container py-0 px-[0.8rem]">
                <p className="block w-full font-bold text-[1.4rem] py-6">
                  대리점
                </p>
                <div className="grid sm:grid-cols-1 sm-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {Agency.map((item, i) => (
                    <div
                      className="bg-white text-[1rem] h-[14rem] pr-10"
                      key={i}
                    >
                      <p className="text-[#fa4616] font-bold hover:text-black cursor-pointer">
                        {item.name}
                      </p>
                      <p className="font-normal">{item.addr}</p>
                      <p className="text-[#fa4616] font-normal hover:text-black cursor-pointer">
                        {item.phone}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="container py-0 px-[0.8rem]">
                <p className="block w-full font-bold text-[1.4rem] py-6">
                  아울렛
                </p>
                <div className="grid sm:grid-cols-1 sm-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {Outlet.map((item, i) => (
                    <div
                      className="bg-white text-[1rem] h-[14rem] pr-10"
                      key={i}
                    >
                      <p className="text-[#fa4616] font-bold hover:text-black cursor-pointer">
                        {item.name}
                      </p>
                      <p className="font-normal">{item.addr}</p>
                      <p className="text-[#fa4616] font-normal hover:text-black cursor-pointer">
                        {item.phone}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            //지역을 골랐을 때 해당 지역에 따라나타나는 부분
            <div className="container py-0 px-[0.8rem]">
              <p className="block w-full font-bold text-[1.4rem] py-6">
                {filteredStores.length === 0 ? (
                  <p className="flex justify-center items-center w-full font-bold text-center text-[1.4rem]">
                    해당 지역에 매장이 존재하지 않습니다.
                  </p>
                ) : (
                  selectedCity
                )}
              </p>
              <div className="grid sm:grid-cols-1 sm-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredStores.map((item, i) => (
                  <div className="bg-white text-[1rem] h-[14rem] pr-10" key={i}>
                    <p className="text-[#fa4616] font-bold hover:text-black cursor-pointer">
                      {item.name}
                    </p>
                    <p className="font-normal">{item.addr}</p>
                    <p className="text-[#fa4616] font-normal hover:text-black cursor-pointer">
                      {item.phone}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default MapComp;
