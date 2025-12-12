// hell yeah //

function showSeason1() {
  document.getElementById("click").play();
  document.getElementById("charles1").src = "images/s1/cxs1.jpeg";
  document.getElementById("charles1").classList.add("clickable");
  document.getElementById("lucas1").src = "images/s1/lg1.jpeg";
  document.getElementById("lucas1").classList.add("clickable");
  document.getElementById("jo1").src = "images/s1/ql1.jpeg";
  document.getElementById("jo1").classList.add("clickable");
  document.getElementById("prometheus").pause();
  document.getElementById("hhh").pause();
  document.getElementById("break").play();
}

function showSeason2() {
  document.getElementById("click").play();
  document.getElementById("charles1").src = "images/s2/ltc1.jpeg";
  document.getElementById("charles1").classList.add("clickable");
  document.getElementById("lucas1").src = "images/s2/ltx1.jpeg";
  document.getElementById("lucas1").classList.add("clickable");
  document.getElementById("jo1").src = "images/s2/qj1.jpeg";
  document.getElementById("jo1").classList.add("clickable");
  document.getElementById("break").pause();
  document.getElementById("hhh").pause();
  document.getElementById("prometheus").play();
}

function showYingdu() {
  document.getElementById("click").play();
  document.getElementById("charles1").src = "images/yingdu/v1.jpeg";
  document.getElementById("charles1").classList.add("clickable");
  document.getElementById("lucas1").src = "images/yingdu/xf1.jpeg";
  document.getElementById("lucas1").classList.add("clickable");
  document.getElementById("jo1").src = "images/yingdu/lx1.jpeg";
  document.getElementById("jo1").classList.add("clickable");
  document.getElementById("break").pause();
  document.getElementById("prometheus").pause();
  document.getElementById("hhh").play();
}

//showing character information
function xiaoshiInfo() {
  document.getElementById("click").play();
  const img = document.getElementById("charles1");
  if (img.src.includes("images/s1/cxs1.jpeg")) {
    document.getElementById("charles1").src = "images/s1/cxsinfo.jpeg";
  } else if (img.src.includes("images/s1/cxsinfo.jpeg")) {
    document.getElementById("charles1").src = "images/s1/cxs1.jpeg";
  }
  if (img.src.includes("images/s2/ltc1.jpeg")) {
    document.getElementById("charles1").src = "images/s2/ltcinfo.jpeg";
  } else if (img.src.includes("images/s2/ltcinfo.jpeg")) {
    document.getElementById("charles1").src = "images/s2/ltc1.jpeg";
  }
  if (img.src.includes("images/yingdu/v1.jpeg")) {
    document.getElementById("charles1").src = "images/yingdu/vinfo.jpeg";
  } else if (img.src.includes("images/yingdu/vinfo.jpeg")) {
    document.getElementById("charles1").src = "images/yingdu/v1.jpeg";
  }
}

function guangInfo() {
  document.getElementById("click").play();
  const img = document.getElementById("lucas1");
  if (img.src.includes("images/s1/lg1.jpeg")) {
    document.getElementById("lucas1").src = "images/s1/lginfo.jpeg";
  } else if (img.src.includes("images/s1/lginfo.jpeg")) {
    document.getElementById("lucas1").src = "images/s1/lg1.jpeg";
  }
  if (img.src.includes("images/s2/ltx1.jpeg")) {
    document.getElementById("lucas1").src = "images/s2/ltxinfo.jpeg";
  } else if (img.src.includes("images/s2/ltxinfo.jpeg")) {
    document.getElementById("lucas1").src = "images/s2/ltx1.jpeg";
  }
  if (img.src.includes("images/yingdu/xf1.jpeg")) {
    document.getElementById("lucas1").src = "images/yingdu/xfinfo.jpeg";
  } else if (img.src.includes("images/yingdu/xfinfo.jpeg")) {
    document.getElementById("lucas1").src = "images/yingdu/xf1.jpeg";
  }
}

function lingInfo() {
  document.getElementById("click").play();
  const img = document.getElementById("jo1");
  if (img.src.includes("images/s1/ql1.jpeg")) {
    document.getElementById("jo1").src = "images/s1/qlinfo.jpeg";
  } else if (img.src.includes("images/s1/qlinfo.jpeg")) {
    document.getElementById("jo1").src = "images/s1/ql1.jpeg";
  }
  if (img.src.includes("images/s2/qj1.jpeg")) {
    document.getElementById("jo1").src = "images/s2/qjinfo.jpeg";
  } else if (img.src.includes("images/s2/qjinfo.jpeg")) {
    document.getElementById("jo1").src = "images/s2/qj1.jpeg";
  }
  if (img.src.includes("images/yingdu/lx1.jpeg")) {
    document.getElementById("jo1").src = "images/yingdu/lxinfo.jpeg";
  } else if (img.src.includes("images/yingdu/lxinfo.jpeg")) {
    document.getElementById("jo1").src = "images/yingdu/lx1.jpeg";
  }
}

// COMPLETION!!
function funFact() {
  document.getElementById("click").play();
  const img = document.getElementById("charles1");
  if (img.src.includes("images/s1/cxs1.jpeg")) {
    document.getElementById("charles1").src = "images/extra/cxsfact.jpeg";
    document.getElementById("lucas1").src = "images/extra/lgfact.jpeg";
    document.getElementById("jo1").src = "images/extra/qlfact.jpeg";
  } else if (img.src.includes("images/s2/ltc1.jpeg")) {
    document.getElementById("charles1").src = "images/extra/ltcfact.jpeg";
    document.getElementById("lucas1").src = "images/extra/ltxfact.jpeg";
    document.getElementById("jo1").src = "images/extra/qjfact.jpeg";
  } else if (img.src.includes("images/yingdu/v1.jpeg")) {
    document.getElementById("charles1").src = "images/extra/vfact.jpg";
    document.getElementById("lucas1").src = "images/extra/xffact.jpg";
    document.getElementById("jo1").src = "images/extra/lxfact.png";
  } else if (img.src.includes("images/extra/cxsfact.jpeg")) {
    document.getElementById("charles1").src = "images/s1/cxs1.jpeg";
    document.getElementById("lucas1").src = "images/s1/lg1.jpeg";
    document.getElementById("jo1").src = "images/s1/ql1.jpeg";
  } else if (img.src.includes("images/extra/ltcfact.jpeg")) {
    document.getElementById("charles1").src = "images/s2/ltc1.jpeg";
    document.getElementById("lucas1").src = "images/s2/ltx1.jpeg";
    document.getElementById("jo1").src = "images/s2/qj1.jpeg";
  } else if (img.src.includes("images/extra/vfact.jpg")) {
    document.getElementById("charles1").src = "images/yingdu/v1.jpeg";
    document.getElementById("lucas1").src = "images/yingdu/xf1.jpeg";
    document.getElementById("jo1").src = "images/yingdu/lx1.jpeg";
  }
}
