<div id="kt_header" class="kt-header  kt-header--fixed " data-ktheader-minimize="on">
    <div class="kt-container  kt-container--fluid ">

        <!-- begin: Header Menu -->
        @include('layouts.slot.headerMenu')
        <!-- end: Header Menu -->

        <!-- begin:: Brand -->
        <div class="kt-header__brand   kt-grid__item" id="kt_header_brand">
            <a class="kt-header__brand-logo" href="?page=index">
                <img alt="Logo" src="assets/media/logos/logo-9.png" />
            </a>
        </div>

        <!-- end:: Brand -->

        <!-- begin:: Header Topbar -->
        <div class="kt-header__topbar kt-grid__item">

            <!--begin: Search -->
            
            <!--end: Search -->

            <!--begin: Notifications -->
            @include('layouts.slot.notifications')
            <!--end: Notifications -->

            <!--begin: Quick actions -->
            
            <!--end: Quick actions -->

            <!--begin: Cart -->
            
            <!--end: Cart -->

            <!--begin: Language bar -->
            
            <!--end: Language bar -->

            <!--begin: User bar -->
            @include('layouts.slot.userBar')
            <!--end: User bar -->

            <!--begin: Quick panel toggler -->
            
            <!--end: Quick panel toggler -->
        </div>

        <!-- end:: Header Topbar -->
    </div>
</div>