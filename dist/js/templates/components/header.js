const header_template = `
<nav class="navbar top-navbar navbar-expand-md navbar-dark">
    <div class="navbar-header" data-logobg="skin5">
        <a class="nav-toggler waves-effect waves-light d-block text-black fcblack d-md-none" href="javascript:void(0)" >
            <i class="ti-menu ti-close"></i>
        </a>
        <a class="navbar-brand" href="index.html">
            <span class="logo-text">
                <img src="../assets/images/prd.png" style="max-height: 56px" alt="homepage" class="light-logo" />
            </span>
        
        <a class="topbartoggler d-block d-md-none waves-effect  waves-light" href="javascript:void(0)" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="ti-more"></i>
        </a>
        
    </div>
    <div class="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
    <ul class="navbar-nav float-right hidden-xs">
            <li class="nav-item search-box">
                <a href="https://www.usaid.gov/kenya" class="m-r-5 bcwhite ws-nowrap bdr-3 p-3">
                    <img src="../assets/images/logos/USAID-Kenya.png" alt="MoH" style="max-height: 37px"/>
                </a>
            </li>
        </ul>
        <div class="float-none mr-auto" style="text-align: center; display: flex; align-items: center; justify-content: center; margin: auto;">
            <h3 class="text-white text-caps mt-3">{{title}}</h3>
        </div>
        <ul class="navbar-nav float-right hidden-xs">
            <li class="nav-item search-box">
                <a href="https://health.go.ke/" class="m-r-5 bcwhite ws-nowrap bdr-3 p-3">
                    <img src="../assets/images/logos/moh-logo.jpg" alt="MoH" style="max-height: 37px"/>
                </a>
            </li>
        </ul>
        
    </div>
</nav>
`