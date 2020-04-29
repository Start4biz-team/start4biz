import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="main-header">
            <div className="header-up">
                <span className="header-up-adress">Санкт&#8209;Петербург,&nbsp;пл.&nbsp;Карла&nbsp;Фаберже,&nbsp;д8</span>
                <a className="header-up-email" href="mailto:info@start4.biz" title="Написать письмо"><span className="header-up-email-text">info@start4.biz</span></a>
                <a className="header-up-phone" href="tel:+79111299351" title="Просто позвоните нам!"><span className="header-up-phone-text">+7&nbsp;911&nbsp;129&#8209;93&#8209;51</span></a>
                <Link className="header-up-button" to="/uc" title="Войти в личный кабинет">
                    <span className="header-up-button-text">Личный&nbsp;кабинет</span>
                </Link>

                <Link className="header-logo-image-link" to="/" title="На главную">
                    <svg className="header-logo-image" 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="54" height="58">
                        <path d="M4.42662 40.6101C2.67213 40.6101 1.22309 40.202 0.0795007 39.3858C0.0548296 39.368 0.0347331 39.3444 0.0208994 39.317C0.00706573 39.2896 -0.000101059 39.2593 1.07655e-06 39.2286V37.687C-2.40369e-06 37.6519 0.00963501 37.6174 0.0278339 37.5875C0.0460328 37.5575 0.0720745 37.5334 0.103042 37.5176C0.13401 37.5019 0.168681 37.4952 0.203171 37.4983C0.237662 37.5015 0.27061 37.5143 0.298326 37.5354C0.794819 37.888 1.33377 38.1744 1.90201 38.3878C2.67584 38.689 3.497 38.8454 4.32571 38.8494C5.01039 38.8778 5.68935 38.7121 6.28651 38.3707C6.51864 38.2456 6.71268 38.0584 6.84765 37.8294C6.98263 37.6004 7.05339 37.3383 7.0523 37.0714C7.05265 36.8584 7.00596 36.6479 6.91566 36.4556C6.82536 36.2633 6.69376 36.094 6.53053 35.9602C6.34973 35.807 6.14492 35.6856 5.9246 35.6012C5.40115 35.3711 4.86094 35.1825 4.3088 35.0371L4.07316 34.9687C3.43358 34.7864 2.92303 34.6212 2.54152 34.4729C2.13339 34.3064 1.73934 34.1063 1.36333 33.8746C0.555432 33.3617 0.151482 32.5582 0.151482 31.4641C0.138457 31.0026 0.236692 30.5448 0.437637 30.1307C0.638582 29.7165 0.936145 29.3585 1.30442 29.0879C2.07294 28.4955 3.11369 28.1991 4.42668 28.1989C5.71221 28.1735 6.98118 28.4965 8.10306 29.1345C8.13165 29.1514 8.15537 29.1757 8.17183 29.2049C8.18829 29.2341 8.19691 29.2671 8.19682 29.3007V30.741C8.19694 30.7739 8.18862 30.8062 8.17267 30.8349C8.15673 30.8635 8.13372 30.8874 8.1059 30.9043C8.07808 30.9211 8.04642 30.9303 8.01404 30.9309C7.98166 30.9316 7.94968 30.9236 7.92124 30.9079C6.86791 30.2927 5.67532 29.966 4.46028 29.9597C3.67483 29.9597 3.07732 30.0993 2.66776 30.3786C2.47961 30.492 2.32394 30.6534 2.21617 30.8469C2.1084 31.0403 2.05229 31.2589 2.0534 31.4812C2.0534 31.8687 2.28342 32.2278 2.74348 32.5582C2.83402 32.6159 2.92984 32.6645 3.02961 32.7035C3.15304 32.7548 3.2933 32.8089 3.45039 32.8659C3.60737 32.9232 3.71958 32.963 3.78702 32.9856L5.13352 33.3788C5.87975 33.5993 6.60168 33.8972 7.28792 34.2677C8.32872 34.8363 8.88399 35.7561 8.95371 37.0272C8.95406 37.0338 8.95425 37.0406 8.95423 37.0472C8.96898 37.5568 8.85816 38.0621 8.63183 38.5171C8.4055 38.9721 8.07083 39.3625 7.65822 39.6528C6.79403 40.2912 5.71683 40.6103 4.42662 40.6101Z" />
                        <path d="M10.0649 29.9578V28.6111C10.0649 28.5607 10.0846 28.5124 10.1197 28.4768C10.1548 28.4412 10.2024 28.4211 10.252 28.4211H19.5222C19.5718 28.4211 19.6194 28.4412 19.6545 28.4768C19.6896 28.5124 19.7093 28.5607 19.7093 28.6111V29.9578C19.7093 30.0082 19.6896 30.0565 19.6545 30.0921C19.6194 30.1278 19.5718 30.1478 19.5222 30.1478H15.9914C15.9418 30.1478 15.8943 30.1678 15.8592 30.2034C15.8241 30.239 15.8044 30.2874 15.8044 30.3377V40.198C15.8044 40.2484 15.7847 40.2967 15.7496 40.3323C15.7146 40.3679 15.667 40.3879 15.6174 40.3879H14.14C14.0904 40.3879 14.0428 40.3679 14.0077 40.3323C13.9727 40.2967 13.953 40.2484 13.953 40.198V30.3377C13.953 30.2874 13.9333 30.239 13.8982 30.2034C13.8631 30.1678 13.8155 30.1478 13.766 30.1478H10.252C10.2024 30.1478 10.1548 30.1278 10.1197 30.0921C10.0846 30.0565 10.0649 30.0082 10.0649 29.9578Z" />
                        <path d="M20.985 40.388H19.4241C19.393 40.388 19.3625 40.3801 19.3352 40.3651C19.3079 40.3502 19.2847 40.3285 19.2677 40.3022C19.2507 40.2758 19.2404 40.2456 19.2377 40.2142C19.2351 40.1828 19.2402 40.1512 19.2526 40.1223L24.2404 28.467C24.2549 28.4331 24.2788 28.4042 24.3093 28.3839C24.3398 28.3636 24.3754 28.3528 24.4119 28.3528H25.9507C25.9872 28.3528 26.0228 28.3636 26.0533 28.3839C26.0837 28.4042 26.1077 28.4331 26.1222 28.467L31.11 40.1223C31.1224 40.1512 31.1275 40.1828 31.1249 40.2142C31.1222 40.2456 31.1119 40.2758 31.0949 40.3022C31.0779 40.3285 31.0547 40.3502 31.0274 40.3651C31.0001 40.3801 30.9695 40.388 30.9385 40.388H29.36C29.3236 40.388 29.288 40.3772 29.2576 40.3569C29.2271 40.3367 29.2032 40.3079 29.1886 40.274L28.0075 37.5272C27.9929 37.4933 27.9689 37.4645 27.9385 37.4443C27.9081 37.424 27.8725 37.4132 27.8361 37.4132H22.4935C22.4569 37.4132 22.4212 37.4241 22.3907 37.4445C22.3602 37.4649 22.3362 37.4939 22.3217 37.528L21.1568 40.2731C21.1423 40.3072 21.1184 40.3362 21.0878 40.3567C21.0573 40.3771 21.0216 40.388 20.985 40.388ZM24.806 31.129L22.937 35.4893C22.9246 35.5182 22.9195 35.5498 22.9221 35.5812C22.9247 35.6126 22.935 35.6429 22.952 35.6692C22.9691 35.6956 22.9923 35.7173 23.0196 35.7323C23.0469 35.7472 23.0774 35.7551 23.1085 35.7551H26.8465C26.8775 35.7551 26.9081 35.7472 26.9354 35.7323C26.9627 35.7173 26.9859 35.6956 27.0029 35.6692C27.0199 35.6429 27.0302 35.6126 27.0328 35.5812C27.0355 35.5498 27.0304 35.5182 27.018 35.4893L25.1489 31.129C25.1344 31.0951 25.1104 31.0663 25.08 31.046C25.0495 31.0257 25.0139 31.0149 24.9775 31.0149C24.9411 31.0149 24.9054 31.0257 24.875 31.046C24.8445 31.0663 24.8206 31.0951 24.806 31.129Z" />
                        <path d="M34.5358 40.3879H33.0584C33.0088 40.3879 32.9612 40.3679 32.9261 40.3323C32.891 40.2967 32.8713 40.2484 32.8713 40.198V28.6111C32.8713 28.5607 32.891 28.5124 32.9261 28.4768C32.9612 28.4412 33.0088 28.4211 33.0584 28.4211H38.2405C39.4523 28.4211 40.4005 28.7346 41.085 29.3614C41.4255 29.6693 41.6955 30.0493 41.8758 30.4746C42.056 30.9 42.1423 31.3603 42.1285 31.8231C42.1493 32.5911 41.9085 33.3429 41.4469 33.9515C41.0317 34.4819 40.4635 34.8671 39.822 35.0529C39.7938 35.0618 39.7681 35.0773 39.747 35.0982C39.7259 35.1191 39.71 35.1448 39.7005 35.1732C39.6911 35.2016 39.6885 35.2318 39.6929 35.2614C39.6972 35.2911 39.7084 35.3192 39.7256 35.3436L43.0619 40.0876C43.0819 40.116 43.0938 40.1494 43.0963 40.1842C43.0988 40.219 43.0918 40.2538 43.076 40.2849C43.0603 40.3159 43.0365 40.3419 43.0071 40.3601C42.9778 40.3783 42.9441 40.3879 42.9097 40.3879H41.1309C41.1011 40.3879 41.0718 40.3807 41.0453 40.3668C41.0188 40.353 40.9959 40.3329 40.9786 40.3082L37.5391 35.4073C37.5218 35.3827 37.499 35.3626 37.4725 35.3487C37.446 35.3349 37.4167 35.3276 37.3869 35.3276H34.9098C34.8602 35.3276 34.8126 35.3476 34.7775 35.3833C34.7425 35.4189 34.7228 35.4672 34.7228 35.5176V40.1979C34.7228 40.2229 34.7179 40.2476 34.7086 40.2706C34.6992 40.2937 34.6854 40.3146 34.668 40.3323C34.6507 40.3499 34.63 40.3639 34.6073 40.3735C34.5846 40.383 34.5603 40.3879 34.5358 40.3879ZM34.7228 30.3377V33.4795C34.7228 33.5299 34.7425 33.5782 34.7775 33.6138C34.8126 33.6494 34.8602 33.6694 34.9098 33.6694H38.1227C38.7959 33.6694 39.3204 33.5156 39.6964 33.2079C39.8852 33.0485 40.0346 32.8465 40.1325 32.6178C40.2304 32.3892 40.2742 32.1404 40.2602 31.8915C40.2718 31.6479 40.2268 31.4049 40.1288 31.1822C40.0309 30.9594 39.8828 30.7632 39.6964 30.6094C39.3203 30.3016 38.7957 30.1478 38.1227 30.1478H34.9098C34.8602 30.1478 34.8126 30.1678 34.7776 30.2034C34.7425 30.239 34.7228 30.2873 34.7228 30.3377V30.3377Z" />
                        <path d="M44.3557 29.9578V28.6111C44.3557 28.5607 44.3754 28.5124 44.4105 28.4768C44.4456 28.4412 44.4931 28.4211 44.5427 28.4211H53.813C53.8626 28.4211 53.9102 28.4412 53.9453 28.4768C53.9803 28.5124 54 28.5607 54 28.6111V29.9578C54 30.0082 53.9803 30.0565 53.9453 30.0921C53.9102 30.1278 53.8626 30.1478 53.813 30.1478H50.2822C50.2326 30.1478 50.185 30.1678 50.15 30.2034C50.1149 30.239 50.0952 30.2874 50.0952 30.3377V40.198C50.0952 40.2484 50.0755 40.2967 50.0404 40.3323C50.0053 40.3679 49.9578 40.3879 49.9082 40.3879H48.4308C48.3812 40.3879 48.3336 40.3679 48.2985 40.3323C48.2634 40.2967 48.2437 40.2484 48.2437 40.198V30.3377C48.2437 30.2874 48.224 30.239 48.189 30.2034C48.1539 30.1678 48.1063 30.1478 48.0567 30.1478H44.5427C44.5182 30.1478 44.4939 30.1429 44.4712 30.1333C44.4485 30.1238 44.4279 30.1098 44.4105 30.0921C44.3931 30.0745 44.3793 30.0536 44.3699 30.0305C44.3606 30.0075 44.3557 29.9828 44.3557 29.9578Z" />
                        <path d="M10.0088 57.8157H8.06014C8.01054 57.8157 7.96298 57.7957 7.9279 57.7601C7.89283 57.7245 7.87313 57.6762 7.87313 57.6258L7.88504 54.9264C7.88504 54.8761 7.86534 54.8278 7.83027 54.7921C7.79519 54.7565 7.74763 54.7365 7.69803 54.7365H0.265139C0.21554 54.7365 0.167972 54.7165 0.1329 54.6809C0.0978282 54.6452 0.078125 54.5969 0.078125 54.5465V53.3498C0.0781354 53.3241 0.0832786 53.2986 0.0932435 53.275C0.103208 53.2514 0.117788 53.2301 0.136099 53.2123L7.83092 45.7542C7.86569 45.7205 7.9119 45.7017 7.95996 45.7017H10.0207C10.0703 45.7017 10.1179 45.7217 10.153 45.7573C10.188 45.7929 10.2077 45.8412 10.2077 45.8916V52.9038C10.2077 52.9541 10.2274 53.0025 10.2625 53.0381C10.2976 53.0737 10.3452 53.0937 10.3948 53.0937H12.365C12.4146 53.0937 12.4621 53.1137 12.4972 53.1494C12.5323 53.185 12.552 53.2333 12.552 53.2837V54.5465C12.552 54.5969 12.5323 54.6452 12.4972 54.6809C12.4621 54.7165 12.4146 54.7365 12.365 54.7365H10.3948C10.3452 54.7365 10.2976 54.7565 10.2625 54.7921C10.2274 54.8278 10.2077 54.8761 10.2077 54.9264L10.1958 57.6258C10.1958 57.6762 10.1761 57.7245 10.1411 57.7601C10.106 57.7957 10.0584 57.8157 10.0088 57.8157ZM7.56936 48.4697L3.10693 52.7659C3.07978 52.7921 3.06097 52.8259 3.05294 52.863C3.04491 52.9001 3.04802 52.9388 3.06188 52.9741C3.07573 53.0094 3.09969 53.0397 3.13066 53.061C3.16163 53.0823 3.19818 53.0937 3.23559 53.0937H7.69803C7.74763 53.0937 7.79519 53.0737 7.83027 53.0381C7.86534 53.0025 7.88504 52.9542 7.88504 52.9038V48.6076C7.88504 48.5704 7.87433 48.5341 7.85422 48.5031C7.83411 48.4721 7.80549 48.4477 7.7719 48.4331C7.73831 48.4184 7.70122 48.414 7.66522 48.4206C7.62923 48.4271 7.5959 48.4442 7.56936 48.4697Z" />
                        <path d="M15.2865 58C15.1289 58.0023 14.9725 57.9725 14.8265 57.9123C14.6805 57.8521 14.5478 57.7628 14.4364 57.6496C14.325 57.5365 14.237 57.4017 14.1778 57.2534C14.1185 57.1051 14.0892 56.9463 14.0914 56.7862C14.089 56.6287 14.1184 56.4724 14.1777 56.3269C14.2371 56.1813 14.3252 56.0497 14.4365 55.9401C14.6592 55.7156 14.9602 55.5896 15.2739 55.5896C15.5876 55.5896 15.8886 55.7156 16.1113 55.9401C16.2248 56.0485 16.3149 56.1797 16.3757 56.3254C16.4366 56.4711 16.4669 56.6281 16.4647 56.7863C16.4683 56.9465 16.4395 57.1058 16.3801 57.2542C16.3208 57.4027 16.2322 57.5373 16.1197 57.6496C16.0117 57.7627 15.8821 57.8521 15.7388 57.9124C15.5955 57.9727 15.4415 58.0025 15.2865 58Z" />
                        <path d="M26.4528 57.8633H19.6919C19.6423 57.8633 19.5947 57.8433 19.5597 57.8077C19.5246 57.772 19.5049 57.7237 19.5049 57.6733V46.0864C19.5049 46.0361 19.5246 45.9877 19.5597 45.9521C19.5947 45.9165 19.6423 45.8965 19.6919 45.8965H25.9277C27.2068 45.8965 28.22 46.1586 28.9674 46.6829C29.3208 46.9138 29.6097 47.2333 29.806 47.6107C30.0024 47.988 30.0996 48.4104 30.0883 48.8371C30.0995 49.3971 29.9133 49.9428 29.5633 50.3757C29.3328 50.6619 29.0492 50.8994 28.7286 51.0747C28.6966 51.0934 28.6708 51.1213 28.6545 51.1549C28.6383 51.1885 28.6322 51.2263 28.6371 51.2634C28.642 51.3006 28.6576 51.3354 28.682 51.3634C28.7065 51.3915 28.7385 51.4116 28.7742 51.4211C29.3814 51.5854 29.9356 51.9087 30.3813 52.3587C30.6568 52.6382 30.8732 52.9719 31.0173 53.3393C31.1615 53.7068 31.2302 54.1002 31.2194 54.4956C31.2194 55.5103 30.7886 56.3251 29.9268 56.9402C29.0784 57.5556 27.9204 57.8633 26.4528 57.8633ZM21.7266 47.8131V50.5274C21.7266 50.5778 21.7463 50.6261 21.7814 50.6618C21.8164 50.6974 21.864 50.7174 21.9136 50.7174H25.5439C26.2843 50.7174 26.8599 50.5835 27.2708 50.3156C27.4657 50.1968 27.6257 50.0271 27.734 49.8242C27.8423 49.6212 27.8951 49.3925 27.8868 49.1618C27.8956 48.9322 27.843 48.7044 27.7345 48.5027C27.6261 48.301 27.4658 48.133 27.2708 48.0164C26.86 47.7543 26.2843 47.6232 25.5439 47.6232H21.9136C21.864 47.6232 21.8165 47.6432 21.7814 47.6788C21.7463 47.7144 21.7266 47.7627 21.7266 47.813V47.8131ZM21.7266 52.5657V55.9468C21.7266 55.9972 21.7463 56.0455 21.7814 56.0811C21.8164 56.1168 21.864 56.1368 21.9136 56.1368H26.0489C26.9104 56.1368 27.587 55.9686 28.0788 55.6324C28.312 55.483 28.5028 55.2743 28.6321 55.0269C28.7614 54.7795 28.8248 54.502 28.8159 54.2221C28.8255 53.949 28.7631 53.6783 28.6353 53.4379C28.5075 53.1975 28.3188 52.9961 28.0888 52.8544C27.6041 52.5355 26.9241 52.376 26.0489 52.3758H21.9136C21.864 52.3758 21.8165 52.3958 21.7814 52.4314C21.7463 52.467 21.7266 52.5153 21.7266 52.5657V52.5657Z" />
                        <path d="M37.8038 57.8633H35.9561C35.9065 57.8633 35.8589 57.8433 35.8238 57.8077C35.7887 57.772 35.769 57.7237 35.769 57.6733V46.0864C35.769 46.0361 35.7887 45.9877 35.8238 45.9521C35.8589 45.9165 35.9065 45.8965 35.9561 45.8965H37.8038C37.8534 45.8965 37.9009 45.9165 37.936 45.9521C37.9711 45.9877 37.9908 46.0361 37.9908 46.0864V57.6733C37.9908 57.7237 37.9711 57.772 37.936 57.8077C37.9009 57.8433 37.8534 57.8633 37.8038 57.8633Z" />
                        <path d="M53.6087 57.8633H42.6721C42.6225 57.8633 42.575 57.8433 42.5399 57.8077C42.5048 57.7721 42.4851 57.7238 42.4851 57.6734V56.6033C42.4851 56.5561 42.5024 56.5106 42.5336 56.4757L50.1591 47.9407C50.1835 47.9135 50.1995 47.8797 50.2053 47.8434C50.211 47.8071 50.2063 47.7698 50.1917 47.7362C50.177 47.7026 50.153 47.674 50.1227 47.6539C50.0924 47.6338 50.0569 47.6231 50.0207 47.6231H43.076C43.0264 47.6231 42.9788 47.6031 42.9438 47.5675C42.9087 47.5319 42.889 47.4836 42.889 47.4332V46.0864C42.889 46.0361 42.9087 45.9877 42.9438 45.9521C42.9788 45.9165 43.0264 45.8965 43.076 45.8965H53.2855C53.3351 45.8965 53.3827 45.9165 53.4178 45.9521C53.4528 45.9877 53.4725 46.0361 53.4725 46.0864V47.1397C53.4725 47.1868 53.4553 47.2321 53.4243 47.267L45.8171 55.8194C45.7928 55.8467 45.7769 55.8805 45.7712 55.9168C45.7655 55.953 45.7703 55.9902 45.785 56.0238C45.7997 56.0574 45.8236 56.0859 45.854 56.1059C45.8843 56.1259 45.9197 56.1366 45.9558 56.1366H53.6087C53.6583 56.1366 53.7059 56.1566 53.7409 56.1922C53.776 56.2279 53.7957 56.2762 53.7957 56.3266V57.6733C53.7957 57.6982 53.7909 57.723 53.7815 57.746C53.7721 57.7691 53.7583 57.79 53.741 57.8077C53.7236 57.8253 53.703 57.8393 53.6803 57.8489C53.6576 57.8584 53.6333 57.8633 53.6087 57.8633Z" />
                        <path d="M44.4065 24.5035V0.189949C44.4065 0.139572 44.3868 0.0912573 44.3518 0.0556349C44.3167 0.0200125 44.2691 0 44.2195 0V0C43.7731 0 43.345 0.180112 43.0294 0.500714C42.7137 0.821315 42.5364 1.25614 42.5364 1.70954V24.5035C42.5364 24.5538 42.5167 24.6021 42.4816 24.6378C42.4465 24.6734 42.399 24.6934 42.3494 24.6934H32.9987C32.9491 24.6934 32.9015 24.6734 32.8664 24.6378C32.8314 24.6021 32.8117 24.5538 32.8117 24.5035V5.88843C32.8117 5.83805 32.792 5.78974 32.7569 5.75411C32.7218 5.71849 32.6743 5.69848 32.6247 5.69848C32.1783 5.69848 31.7502 5.87859 31.4345 6.19919C31.1189 6.51979 30.9415 6.95462 30.9415 7.40802V24.5035C30.9415 24.5538 30.9218 24.6021 30.8868 24.6378C30.8517 24.6734 30.8041 24.6934 30.7545 24.6934H21.5908C21.5412 24.6934 21.4937 24.6734 21.4586 24.6378C21.4235 24.6021 21.4038 24.5538 21.4038 24.5035V11.5869C21.4038 11.5365 21.3841 11.4882 21.349 11.4526C21.314 11.417 21.2664 11.397 21.2168 11.397C20.7704 11.397 20.3423 11.5771 20.0267 11.8977C19.711 12.2183 19.5337 12.6531 19.5337 13.1065V24.5035C19.5337 24.5538 19.514 24.6021 19.4789 24.6378C19.4438 24.6734 19.3963 24.6934 19.3467 24.6934H10.183C10.1334 24.6934 10.0858 24.6734 10.0507 24.6378C10.0157 24.6021 9.99597 24.5538 9.99597 24.5035V17.2854C9.99597 17.235 9.97626 17.1867 9.94119 17.1511C9.90612 17.1154 9.85855 17.0954 9.80895 17.0954C9.36256 17.0954 8.93445 17.2755 8.6188 17.5961C8.30316 17.9167 8.12583 18.3516 8.12583 18.805V24.5035C8.12583 24.5538 8.10612 24.6021 8.07105 24.6378C8.03598 24.6734 7.98841 24.6934 7.93881 24.6934H0.271242C0.221643 24.6934 0.174076 24.7134 0.139004 24.749C0.103932 24.7847 0.0842285 24.833 0.0842285 24.8834V26.4029C0.0842285 26.4533 0.103932 26.5016 0.139004 26.5373C0.174076 26.5729 0.221643 26.5929 0.271242 26.5929H53.7572C53.8068 26.5929 53.8544 26.5729 53.8895 26.5373C53.9245 26.5016 53.9442 26.4533 53.9442 26.4029V24.8834C53.9442 24.833 53.9245 24.7847 53.8895 24.749C53.8544 24.7134 53.8068 24.6934 53.7572 24.6934H44.5935C44.5439 24.6934 44.4964 24.6734 44.4613 24.6378C44.4262 24.6021 44.4065 24.5538 44.4065 24.5035Z" />
                        <path d="M53.7572 41.9788H0.271242C0.167957 41.9788 0.0842285 42.0638 0.0842285 42.1687V43.6883C0.0842285 43.7932 0.167957 43.8783 0.271242 43.8783H53.7572C53.8605 43.8783 53.9442 43.7932 53.9442 43.6883V42.1687C53.9442 42.0638 53.8605 41.9788 53.7572 41.9788Z" />
                    </svg>
                </Link>
            </div>
            <div className="header-down">
                <nav className="header-down-main-menu">
                    <ul className="header-down-main-menu-list">
                        <li className="header-down-main-menu-item"><Link to="/about" className="header-down-main-menu-link" title="О проекте">
                            <span className="header-down-main-menu-link-text">
                                О&nbsp;проекте
                            </span>
                        </Link></li>
                        <li className="header-down-main-menu-item"><Link to="/contacts" className="header-down-main-menu-link" title="Контакты">
                            <span className="header-down-main-menu-link-text">Контакты</span>
                        </Link></li>
                        <li className="header-down-main-menu-item"><Link to="/uc" className="header-down-main-menu-link" title="Финансовым организациям">
                            <span className="header-down-main-menu-link-text">Финансовым&nbsp;организациям</span>
                        </Link></li>
                        <li className="header-down-main-menu-item"><Link to="/uc" className="header-down-main-menu-link" title="Бизнесу">
                            <span className="header-down-main-menu-link-text">Бизнесу</span>
                        </Link></li>
                        <li className="header-down-main-menu-item"><Link to="/uc" className="header-down-main-menu-link" title="Кредиты">
                            <span className="header-down-main-menu-link-text">Кредиты</span>
                        </Link></li>
                        <li className="header-down-main-menu-item"><Link to="/uc" className="header-down-main-menu-link" title="Эквайринг">
                            <span className="header-down-main-menu-link-text">Эквайринг</span>
                        </Link></li>
                        <li className="header-down-main-menu-item"><Link to="/uc" className="header-down-main-menu-link" title="Овердрафты">
                            <span className="header-down-main-menu-link-text">Овердрафты</span>
                        </Link></li>
                        <li className="header-down-main-menu-item"><Link to="/uc" className="header-down-main-menu-link" title="Лизинг">
                            <span className="header-down-main-menu-link-text">Лизинг</span>
                        </Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
  
export default Header;