<?php include 'partial/head.php'; ?>
	<script src="https://cdn.jsdelivr.net/npm/markdown-it/dist/markdown-it.min.js"></script>
	<script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/highlight.min.js"></script>
	<link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/chat.css">
    <link rel="stylesheet" href="assets/css/custom.css">
    <title>Mengobrol Dengan AI - HyTech GPT</title>
    <meta name="description" content="HyTech GPT, dikembangkan oleh tim ahli kecerdasan buatan terkemuka di HyTech Labs, adalah model bahasa generatif yang kuat dan serbaguna yang dirancang untuk menangani berbagai tugas pemrosesan bahasa alami (NLP)." />
    
    <meta property="og:title" content="Mengobrol Dengan AI - HyTech GPT">
    <meta property="og:site_name" content="HyTech GPT">
    <meta property="og:url" content="https://gpt.hy-tech.my.id/about">
    <meta property="og:description" content="HyTech GPT, dikembangkan oleh tim ahli kecerdasan buatan terkemuka di HyTech Labs, adalah model bahasa generatif yang kuat dan serbaguna yang dirancang untuk menangani berbagai tugas pemrosesan bahasa alami (NLP).">
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://gpt.hy-tech.my.id/assets/images/logo.png">
	<script>
		window.MathJax = {
			tex: {
			  inlineMath: [['$', '$'], ['\\(', '\\)']],
			  displayMath: [['$$', '$$'], ['\\[', '\\]']]
			},
			svgs: {
			  fontCache: 'global'
			}
		};
	</script>
	<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" async></script><script type="importmap">
    {
      "imports": {
        "@google/generative-ai": "https://esm.run/@google/generative-ai"
      }
    }
  </script>
  <script type="module" src="assets/javascript/module.js"></script>
  
</head>

<body>
    <div class="site_content">
        <?php include 'partial/loader.php'; ?>
        <div class="verification-main">
            <div class="container verify-screen-main p-0">
                <div class="amigo-chat-menu-main">
                    <div class="d-flex align-items-center">
                    <a href="/">
                            <img class="profile-pic" src="assets/images/Button-Back.png" alt="Button-Back">
                        </a>
						<h1>Chat HyTech</h1>
                    </div>
                    <div class="d-flex">
						<div class="me-2">
							<input type="file" id="imageInput" accept="image/*" style="display: none;" multiple>
							<label for="imageInput" id="uploadImageBtn" title="Upload Image">&#128247;<span id="imageCounter" class="image-counter">0</span></label>
						</div>
						<button id="toggle-manage">⚙️</button>
                    </div>
                </div>
                <div class="amigo-chat-AI-main">
					<span id="loading" class="py-1 px-2 text-center rounded">
						<img src="https://cdn.pixabay.com/animation/2023/05/02/04/29/04-29-06-428_512.gif" width="20" height="20" />
						<span class="ps-2"> Mohon tunggu...</span>
					</span>
                    <div id="chat-container" class="chat">
						<div id="manage-container" class="hidden">
							<div id="heading">Pengaturan</div>
							<div id="api-key-container">
								<input type="password" id="apiKeyInput" value="AIzaSyBTqUk4b500NQE2BhLvtXmzyHozSyK_XD4" placeholder="Masukan Apikey Gemini...">
							</div>
							<div id="chat-sessions-container">
							 <select id="chatSessions"></select>
							 <button id="addSession">Sesi Baru</button>
							 <button id="renameSession">Ganti Sesi</button>
							 <button id="deleteSession">Hapus Sesi</button>
							</div>
							<div id="generation-config">
							  <label for="maxOutputTokens">Token Output Maksimal: <span id="maxOutputTokensValue">16384</span></label>
							  <input class="slider" type="range" id="maxOutputTokens" min="100" max="30720" value="16384" step="100">
							  
							  <label for="temperature">Temperature: <span id="temperatureValue">0.9</span></label>
							  <input class="slider" type="range" id="temperature" min="0.1" max="2" value="0.9" step="0.1">
							  
							  <label for="topP">Top P: <span id="topPValue">0.95</span></label>
							  <input class="slider" type="range" id="topP" min="0.1" max="1" value="0.95" step="0.05">
							  
							  <label for="topK">Top K: <span id="topKValue">1</span></label>
							  <input class="slider" type="range" id="topK" min="1" max="20" value="1" step="1">
							</div>
							<div class="button-setting">
								<button id="resetGenConfig">Aut Ulang</button>
								<button id="removeAttachments" title="Remove Attachments">Hapus Semua</button>
							</div>
						</div>
                        <div id="chat"></div>
						<div id="image-preview-container" class="hidden"></div>
                        <div class="chat-input">
                            <div id="send-container" class="message-box">
								<textarea id="userInput" class="message-input" placeholder="Tanyakan sesuatu..."></textarea>
							</div>
                            <button id="send" class="message-submit">
                                <svg class="send-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none">
                                    <mask id="mask0_3_3689" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0"
                                        y="0" width="24" height="24">
                                        <rect width="24" height="24" fill="white" />
                                    </mask>
                                    <g mask="url(#mask0_3_3689)">
                                        <path class="icon-send-message" d="M10 14L21 3" stroke="white" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path class="icon-send-message"
                                            d="M21.0006 3L14.5006 21C14.4567 21.0957 14.3862 21.1769 14.2976 21.2338C14.209 21.2906 14.1059 21.3209 14.0006 21.3209C13.8952 21.3209 13.7921 21.2906 13.7035 21.2338C13.6149 21.1769 13.5444 21.0957 13.5006 21L10.0006 14L3.00056 10.5C2.90482 10.4561 2.82369 10.3857 2.7668 10.2971C2.70992 10.2084 2.67969 10.1053 2.67969 10C2.67969 9.89468 2.70992 9.79158 2.7668 9.70295C2.82369 9.61431 2.90482 9.54387 3.00056 9.5L21.0006 3Z"
                                            stroke="white" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="assets/javascript/chat/chat_scrollbar.js"></script>
    <script src="assets/javascript/script.js"></script>
<?php include 'partial/js.php'; ?>