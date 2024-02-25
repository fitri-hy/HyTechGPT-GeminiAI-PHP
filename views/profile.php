<?php include 'partial/head.php'; ?>
    <title>Profile - HyTech</title>
</head>

<body>
    <div class="site_content">
        <?php include 'partial/loader.php'; ?>
        <div class="verification-main">
            <div class="container verify-screen-main p-0">
                <div class="back-btn back-btn2">
                    <a href="/">
                        <img src="assets/images/Button-Back.png" alt="Button-Back">
                    </a>
                    <h1>Profile Detail</h1>
                </div>
                <div class="verify-section-main verify-section-main-forget">
                    <div class="camera_main  position-relative">
                        <div class="circle-img-girl">
                            <img class="profile-pic" src="assets/images/girl.png" alt="girl">
                        </div>
                        <svg class="ri-camera-line upload-button" xmlns="http://www.w3.org/2000/svg" width="40"
                            height="40" viewBox="0 0 40 40" fill="none">
                            <circle class="camera-bg" cx="20" cy="20" r="20" fill="#0F0F0F" />
                            <g>
                                <path class="camera"
                                    d="M13 15H14C14.5304 15 15.0391 14.7893 15.4142 14.4142C15.7893 14.0391 16 13.5304 16 13C16 12.7348 16.1054 12.4804 16.2929 12.2929C16.4804 12.1054 16.7348 12 17 12H23C23.2652 12 23.5196 12.1054 23.7071 12.2929C23.8946 12.4804 24 12.7348 24 13C24 13.5304 24.2107 14.0391 24.5858 14.4142C24.9609 14.7893 25.4696 15 26 15H27C27.5304 15 28.0391 15.2107 28.4142 15.5858C28.7893 15.9609 29 16.4696 29 17V26C29 26.5304 28.7893 27.0391 28.4142 27.4142C28.0391 27.7893 27.5304 28 27 28H13C12.4696 28 11.9609 27.7893 11.5858 27.4142C11.2107 27.0391 11 26.5304 11 26V17C11 16.4696 11.2107 15.9609 11.5858 15.5858C11.9609 15.2107 12.4696 15 13 15"
                                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path class="camera"
                                    d="M20 24C21.6569 24 23 22.6569 23 21C23 19.3431 21.6569 18 20 18C18.3431 18 17 19.3431 17 21C17 22.6569 18.3431 24 20 24Z"
                                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </svg>
                        <input class="file-upload" type="file" accept="image/*">
                    </div>
                    <div class="new_password_input">
                        <div class="form-item">
                            <input type="text" id="Name" autocomplete="off" required>
                            <label class="info-person" for="Name">Nama</label>
                            <svg class="edit-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none">
                                <g>
                                    <path class="edit-info-svg"
                                        d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17"
                                        stroke="#0F0F0F" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path class="edit-info-svg"
                                        d="M20.385 6.58499C20.7788 6.19114 21.0001 5.65697 21.0001 5.09998C21.0001 4.543 20.7788 4.00883 20.385 3.61498C19.9912 3.22114 19.457 2.99988 18.9 2.99988C18.343 2.99988 17.8088 3.22114 17.415 3.61498L9 12V15H12L20.385 6.58499Z"
                                        stroke="#0F0F0F" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path class="edit-info-svg" d="M16 5L19 8" stroke="#0F0F0F" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </svg>
                        </div>
                        <div class="form-item">
                            <input type="text" id="email" autocomplete="off" required>
                            <label class="info-person" for="email">Alamat Email</label>
                            <svg class="edit-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none">
                                <g>
                                    <path class="edit-info-svg"
                                        d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17"
                                        stroke="#0F0F0F" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path class="edit-info-svg"
                                        d="M20.385 6.58499C20.7788 6.19114 21.0001 5.65697 21.0001 5.09998C21.0001 4.543 20.7788 4.00883 20.385 3.61498C19.9912 3.22114 19.457 2.99988 18.9 2.99988C18.343 2.99988 17.8088 3.22114 17.415 3.61498L9 12V15H12L20.385 6.58499Z"
                                        stroke="#0F0F0F" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path class="edit-info-svg" d="M16 5L19 8" stroke="#0F0F0F" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </svg>
                        </div>
                        <div class="form-item">
                            <input type="text" id="address" autocomplete="off" required>
                            <label class="info-person" for="address">Alamat</label>
                            <svg class="edit-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none">
                                <g>
                                    <path class="edit-info-svg"
                                        d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17"
                                        stroke="#0F0F0F" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path class="edit-info-svg"
                                        d="M20.385 6.58499C20.7788 6.19114 21.0001 5.65697 21.0001 5.09998C21.0001 4.543 20.7788 4.00883 20.385 3.61498C19.9912 3.22114 19.457 2.99988 18.9 2.99988C18.343 2.99988 17.8088 3.22114 17.415 3.61498L9 12V15H12L20.385 6.58499Z"
                                        stroke="#0F0F0F" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path class="edit-info-svg" d="M16 5L19 8" stroke="#0F0F0F" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </svg>
                        </div>
                        <div class="form-item">
                            <input type="text" id="datepicker" class="no-spinners" autocomplete="off" required>
                            <label class="info-person" for="datepicker">Tanggal Lahir</label>
                            <svg class="edit-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none">
                                <g>
                                    <path class="edit-info-svg"
                                        d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17"
                                        stroke="#0F0F0F" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path class="edit-info-svg"
                                        d="M20.385 6.58499C20.7788 6.19114 21.0001 5.65697 21.0001 5.09998C21.0001 4.543 20.7788 4.00883 20.385 3.61498C19.9912 3.22114 19.457 2.99988 18.9 2.99988C18.343 2.99988 17.8088 3.22114 17.415 3.61498L9 12V15H12L20.385 6.58499Z"
                                        stroke="#0F0F0F" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path class="edit-info-svg" d="M16 5L19 8" stroke="#0F0F0F" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </svg>
                        </div>
                        <div class="form-item">
                            <input type="text" id="Gender" class="no-spinners" autocomplete="off" required>
                            <label class="info-person" for="Gender">Gender</label>
                            <svg class="edit-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none">
                                <g>
                                    <path class="edit-info-svg"
                                        d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17"
                                        stroke="#0F0F0F" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path class="edit-info-svg"
                                        d="M20.385 6.58499C20.7788 6.19114 21.0001 5.65697 21.0001 5.09998C21.0001 4.543 20.7788 4.00883 20.385 3.61498C19.9912 3.22114 19.457 2.99988 18.9 2.99988C18.343 2.99988 17.8088 3.22114 17.415 3.61498L9 12V15H12L20.385 6.58499Z"
                                        stroke="#0F0F0F" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path class="edit-info-svg" d="M16 5L19 8" stroke="#0F0F0F" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div class="bottom-fix-btn onboarding-next-btn-new-payment update-info-btn"
                        onclick="location.href='#'">
                        <a href="Amigo_GPT_home.html">Pembaharui Perubahan</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        $("#datepicker").datepicker({
            dateFormat: "dd-mm-yy"
            , duration: "fast"
        });
    </script>
    <script src="assets/javascript/jquery.ui.min.js"></script>
<?php include 'partial/js.php'; ?>