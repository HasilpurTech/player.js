// JScript File
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    MacOSX: function() {
        return navigator.userAgent.match(/Macintosh/i);
    },	
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
var embedded = "mobile";
if (!isMobile.any()){
        embedded = "desktop";
}

if(v_height == "100%"){
    PlaySize = 'style="overflow:hidden;height:100%;width:100%"';
}
else{
    PlaySize = '';
}
document.write('<ifr'+'ame src="https://gocast2.com/gcrichd.php?player='+ embedded +'&live='+ fid +'" '+PlaySize +' width='+ v_width +' height=' + v_height + ' scrolling=no autoplay=yes frameborder=0 scrolling=no allowfullscreen=true allowtransparency=true allow="autoplay, fullscreen" allowautoplay=yes id=thatframe  webkitallowfullscreen mozallowfullscreen allowfullscreen ></ifr'+'ame>');

/**/
