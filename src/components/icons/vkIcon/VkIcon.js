import React from 'react';

import styles from './vkIcons.sass';

export default class VkIcon extends React.Component {
    render() {
        return (
            <svg className={styles.icon} viewBox="0 -2 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2.5 0C1.12524 0 0 1.12524 0 2.5V18.5C0 19.8748 1.12524 21 2.5 21H18.5C19.8748 21 21 19.8748 21 18.5V2.5C21 1.12524 19.8748 0 18.5 0H2.5ZM2.5 1H18.5C19.3342 1 20 1.66576 20 2.5V18.5C20 19.3342 19.3342 20 18.5 20H2.5C1.66576 20 1 19.3342 1 18.5V2.5C1 1.66576 1.66576 1 2.5 1ZM9.69824 5.99609C9.1695 5.99488 8.69803 6.02443 8.27637 6.23145C8.27604 6.23177 8.27572 6.2321 8.27539 6.23242C8.06982 6.3337 7.92494 6.46235 7.80957 6.61523C7.75189 6.69168 7.69279 6.7603 7.66113 6.93457C7.6453 7.0217 7.63641 7.16291 7.72754 7.31543C7.81867 7.46795 8.0019 7.55468 8.11914 7.57031C8.20058 7.58115 8.38441 7.6594 8.40137 7.68262C8.40169 7.68327 8.40202 7.68392 8.40234 7.68457C8.40247 7.68474 8.47363 7.87057 8.49414 8.03613C8.51465 8.20169 8.51367 8.33594 8.51367 8.33594C8.51346 8.34929 8.51379 8.36265 8.51465 8.37598C8.51465 8.37598 8.54361 8.80976 8.52441 9.25781C8.51676 9.43639 8.49367 9.59526 8.46973 9.7373C8.29167 9.54072 8.02931 9.18473 7.65039 8.52832C7.23005 7.79972 6.89551 7.14648 6.89551 7.14648C6.87794 7.08957 6.8158 6.91251 6.57324 6.73438C6.30808 6.53894 6.05176 6.50977 6.05176 6.50977C6.0196 6.50332 5.9869 6.50005 5.9541 6.5L3.9834 6.50098C3.9834 6.50098 3.86524 6.49414 3.72363 6.51367C3.58203 6.5332 3.36879 6.5491 3.16309 6.79297C3.16276 6.79329 3.16243 6.79362 3.16211 6.79395C2.97827 7.01361 2.98939 7.25641 3.01172 7.39355C3.03405 7.5307 3.08398 7.63477 3.08398 7.63477C3.08495 7.63672 3.08592 7.63868 3.08691 7.64062C3.08691 7.64062 4.69886 11.0297 6.52051 13.0254C7.84335 14.4744 9.20112 14.499 10.3213 14.499H11.1572C11.3706 14.499 11.5637 14.4907 11.7773 14.3662C11.991 14.2417 12.1348 13.9387 12.1348 13.7285C12.1348 13.5083 12.1677 13.3351 12.208 13.2461C12.2364 13.1835 12.2589 13.161 12.2939 13.1426C12.3014 13.1473 12.2966 13.1445 12.3174 13.1592C12.4006 13.2177 12.5381 13.3511 12.6875 13.5176C12.9864 13.8504 13.3256 14.307 13.7812 14.6201C14.1077 14.8446 14.416 14.9443 14.6504 14.9805C14.7973 15.0031 14.9113 14.9988 14.9922 14.9922L16.8594 15C16.8705 15 16.8815 14.9997 16.8926 14.999C16.8926 14.999 17.2143 15.0028 17.5488 14.8027C17.7161 14.7027 17.9134 14.5131 17.9775 14.2363C18.0417 13.9596 17.9611 13.6729 17.8037 13.4111C17.8037 13.4108 17.8037 13.4105 17.8037 13.4102C17.831 13.4555 17.779 13.3624 17.7256 13.2754C17.6722 13.1884 17.5947 13.0712 17.4834 12.9258C17.2608 12.6349 16.9043 12.228 16.3281 11.6914C16.3278 11.6914 16.3275 11.6914 16.3271 11.6914C16.0345 11.4191 15.8369 11.2263 15.7559 11.1191C15.6749 11.012 15.7014 11.0683 15.707 11.041C15.7182 10.9865 16.0695 10.4798 16.7842 9.52539C17.2186 8.94444 17.5235 8.50829 17.7246 8.14551C17.9257 7.78273 18.0707 7.46855 17.9697 7.08398C17.9694 7.08333 17.9691 7.08268 17.9688 7.08203C17.9239 6.91322 17.8015 6.75762 17.6758 6.67285C17.5501 6.58808 17.4309 6.55493 17.3242 6.53418C17.1109 6.49269 16.9248 6.5 16.752 6.5C16.3896 6.5 14.7817 6.5127 14.6494 6.5127C14.493 6.5127 14.2345 6.58382 14.1201 6.65234C13.8326 6.82539 13.75 7.05273 13.75 7.05273C13.7448 7.06234 13.7399 7.07211 13.7354 7.08203C13.7354 7.08203 13.4037 7.81749 12.9766 8.54395C12.5439 9.28081 12.2242 9.63225 12.0312 9.79492C12.0259 9.76599 12.0269 9.78948 12.0234 9.74902C12.0061 9.54325 12.0254 9.25891 12.0254 8.98145C12.0254 8.23419 12.0887 7.7112 12.0547 7.24902C12.0377 7.01794 11.9949 6.77964 11.8428 6.56055C11.6907 6.34145 11.4376 6.19911 11.1875 6.13867C11.0374 6.10247 10.8664 6.00832 10.2471 6.00195C10.2467 6.00195 10.2464 6.00195 10.2461 6.00195C10.0567 6.00006 9.87449 5.9965 9.69824 5.99609ZM10.2363 7.00195C10.7843 7.00758 10.6478 7.03775 10.9521 7.11133C11.0465 7.13413 11.0237 7.134 11.0215 7.13086C11.0193 7.12771 11.047 7.17926 11.0576 7.32324C11.0788 7.61119 11.0254 8.1837 11.0254 8.98145C11.0254 9.19898 10.9991 9.50941 11.0264 9.83301C11.0536 10.1566 11.1338 10.5719 11.5205 10.8223C11.7038 10.9411 11.9166 10.9486 12.0986 10.9033C12.2806 10.8581 12.4458 10.7638 12.6191 10.625C12.9659 10.3473 13.3527 9.87873 13.8389 9.05078C14.2933 8.27793 14.6238 7.54199 14.6348 7.51758C14.6369 7.51586 14.6391 7.51467 14.6416 7.5127C14.6478 7.51276 14.6414 7.5127 14.6494 7.5127C14.8361 7.5127 16.4143 7.5 16.752 7.5C16.8308 7.5 16.8595 7.50475 16.9219 7.50684C16.9049 7.56347 16.9238 7.52735 16.8496 7.66113C16.6941 7.94173 16.4075 8.35873 15.9834 8.92578C15.2866 9.85635 14.8547 10.221 14.7275 10.8389C14.664 11.1478 14.7831 11.4903 14.958 11.7217C15.1329 11.9531 15.3536 12.1514 15.6465 12.4238C16.1888 12.9288 16.5069 13.2956 16.6895 13.5342C16.7807 13.6535 16.8383 13.7396 16.874 13.7979C16.9098 13.8561 16.9009 13.85 16.9473 13.9268C16.9778 13.9779 16.9665 13.9467 16.9717 13.9619C16.9117 13.9788 16.8391 13.9992 16.835 14L14.9961 13.9922C14.963 13.9922 14.9299 13.9954 14.8975 14.002C14.8975 14.002 14.9021 14.0074 14.8037 13.9922C14.7053 13.977 14.5489 13.9344 14.3477 13.7959C14.1048 13.629 13.7648 13.2206 13.4316 12.8496C13.2651 12.6641 13.099 12.486 12.8926 12.3408C12.6862 12.1957 12.3774 12.0592 12.0439 12.1641C11.6978 12.2727 11.4284 12.5429 11.2969 12.833C11.199 13.049 11.191 13.2746 11.1758 13.499C11.1592 13.5003 11.1783 13.499 11.1572 13.499H10.3213C9.18546 13.499 8.37895 13.5776 7.25879 12.3506C5.75204 10.6999 4.37156 7.95351 4.14648 7.50098L5.88086 7.5C5.91134 7.5117 5.97659 7.5362 5.98047 7.53906C5.98112 7.53972 5.98177 7.54037 5.98242 7.54102C5.91902 7.49468 5.98535 7.55957 5.98535 7.55957C5.99147 7.57454 5.99832 7.58921 6.00586 7.60352C6.00586 7.60352 6.34952 8.27492 6.78418 9.02832C7.21054 9.76691 7.52123 10.2283 7.82129 10.5332C7.97132 10.6856 8.12277 10.8079 8.3252 10.877C8.52762 10.946 8.789 10.9207 8.96484 10.8242C9.32406 10.6276 9.37232 10.3376 9.43066 10.084C9.48909 9.83006 9.51235 9.55957 9.52344 9.30078C9.54496 8.79848 9.51452 8.36376 9.5127 8.33691C9.51281 8.3275 9.51509 8.14622 9.48633 7.91406C9.45688 7.67634 9.42403 7.38568 9.20898 7.09277L9.20801 7.0918C9.20651 7.08975 9.20463 7.08989 9.20312 7.08789C9.4875 7.04711 9.73083 6.9969 10.2363 7.00195ZM14.6475 7.49219L14.6406 7.50781C14.6396 7.50842 14.6399 7.50709 14.6387 7.50781C14.6408 7.50378 14.6475 7.49219 14.6475 7.49219Z"
                />
            </svg>
        );
    }
}