<template>
  <footer class="footer">
    <ul class="footer-menu">
      <li class="footer-menu-item">이용약관</li>
      <li class="footer-menu-item">매물신고운영</li>
      <li class="footer-menu-item">개인정보처리방침</li>
      <li class="footer-menu-item">부동산 고객센터</li>
    </ul>
    <p class="footer-content">
      Happy house에서 제공하는 부동산 정보는 각 콘텐츠 제공업체로부터 받는 정보로 참고용입니다.<br />
      정보의 정보의 정확성이나 신뢰성을 보증하지 않으며, 서비스 이용의 결과에 대해서 어떠한 법적인
      책임을 지지 않습니다. <br />게시된 정보는 무단으로 배포할 수 없습니다.
    </p>
    <p class="footer-content">Copyright ⓒ Happy House. All Rights Reserved.</p>
  </footer>
</template>
<script>
export default {};
</script>
<style>
.footer {
  position: absolute;
  z-index: -1;
  bottom: -5.7em;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5em 0em;
  color: #ffebee;
  background-color: darkslateblue;
}

.footer-menu {
  display: flex;
}

.footer-menu-item {
  margin: 1em;
  cursor: pointer;
}

.footer-menu-item:hover {
  color: orange;
}

.footer-content {
  font-size: 0.8rem;
}

@media screen and (max-width: 24rem) {
  .footer-menu {
    flex-direction: column;
  }

  .footer-menu-item {
    font-size: 0.8rem;
    margin: 0.2em;
  }

  .footer-content {
    font-size: 0.7rem;
    max-width: 20rem;
  }
}
</style>
