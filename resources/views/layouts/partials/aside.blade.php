<button class="kt-aside-close " id="kt_aside_close_btn"><i class="la la-close"></i></button>
<div class="kt-aside  kt-aside--fixed  kt-grid__item kt-grid kt-grid--desktop kt-grid--hor-desktop" id="kt_aside">

    <!-- begin:: Aside Menu -->
    <div class="kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid" id="kt_aside_menu_wrapper">
        <div id="kt_aside_menu" class="kt-aside-menu " data-ktmenu-vertical="1" data-ktmenu-scroll="1">
            <ul class="kt-menu__nav ">
                <li class="kt-menu__item "><a href="{{ route('home') }}" data-turbolinks-action="replace" class="kt-menu__link "><i class="kt-menu__link-icon fa fa-home"></i><span class="kt-menu__link-text">{{ __('Dashboard') }}</span></a></li>
                <li class="kt-menu__section ">
                    <h4 class="kt-menu__section-text">{{ __('Master Pengguna') }}</h4>
                    <i class="kt-menu__section-icon flaticon-more-v2"></i>
                </li>
    
                <li class="kt-menu__item  kt-menu__item--submenu" data-ktmenu-submenu-toggle="hover"><a href="javascript:;" class="kt-menu__link kt-menu__toggle"><i class="kt-menu__link-icon fa fa-users-cog"></i><span class="kt-menu__link-text">{{ __('Pengaturan Pengguna') }}</span><i class="kt-menu__ver-arrow la la-angle-right"></i></a>
                    <div class="kt-menu__submenu "><span class="kt-menu__arrow"></span>
                        <ul class="kt-menu__subnav">
                            <li class="kt-menu__item  kt-menu__item--parent"><span class="kt-menu__link"><span class="kt-menu__link-text">{{ __('Pengaturan Pengguna') }}</span></span></li>
                            <li class="kt-menu__item "><a href="{{ route('user.index') }}" data-turbolinks-action="replace" class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">{{ __('Pengguna') }}</span></a></li>
                            <li class="kt-menu__item "><a href="{{ route('role.index') }}" data-turbolinks-action="replace" class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">{{ __('Role Pengguna') }}</span></a></li>
                            <li class="kt-menu__item "><a href="#" data-turbolinks-action="replace" class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">{{ __('Hak Akses') }}</span></a></li>
                        </ul>
                    </div>
                </li>
                
            </ul>
        </div>
    </div>

    <!-- end:: Aside Menu -->
</div>