# II2R--Intro to Intro to Raycasting

> "*...If you don't know, now you know..."* - **Notorious B.I.G** (1994)

이 글은 필자가 [42 Seoul](http://42seoul.kr) 에서 주어진 프로젝트 과제인 'cub3d'—울펜슈타인 3D의 엔진을 C로 재현 해보는—과제를 진행 하면서 보고 배우고 느낀 점들을 정리 하기 위해 작성한 글이다.

[Lodev.com](http://lodev.com) 의 'Lode's Computer Graphics Tutorial--Raycasting' 을 읽기 이전에, 문서에서 나온 부분에 관련 지식 기반이 전혀 없는 상태에서 글을 읽어보기 전 어떤 점들을 알아야 하고, 학습을 학습하는데 도움을 위한 목적으로 작성하였다.

### II2R--Intro to Intro to Raycasting
---
#### 👉 <a href="https://github.com/sungyongcho/ii2r/blob/master/md/1.md">#1</a>
#### 👉 <a href="https://github.com/sungyongcho/ii2r/blob/master/md/2.md">#2</a>
#### 👉 <a href="https://github.com/sungyongcho/ii2r/blob/master/md/3.md">#3</a>
#### 👉 <a href="https://github.com/sungyongcho/ii2r/blob/master/md/4.md">#4</a>
#### 👉 <a href="https://github.com/sungyongcho/ii2r/blob/master/md/5.md">#5</a>
#### 👉 <a href="https://github.com/sungyongcho/ii2r/blob/master/md/6.md">#6</a>
#### 👉 <a href="https://github.com/sungyongcho/ii2r/blob/master/md/6_2.md">#6_2</a>
---

반갑습니다. 42 Seoul cadet (교육생) 인트라 ID sucho 입니다.

제가 cub3d 과제를 완수 하기 위해서 공부 해 나갔던 과정들을 정리하여 보았습니다. 이 글을 읽어보시면 도움이 될 것이라고 생각하는 대상은,
- 과제를 수행하기에 앞서 두려움이 있거나,
- 수학적 지식이 기반이 부족하다고 생각 되시는 분
- 시행착오를 약간이라도 줄이고 싶다

라고 생각 됩니다. 본문에서도 많이 강조하는 편이지만, 수학적 지식이나 컴퓨터그래픽스에 대해 이전에 다뤄 보신 분들이 있으시다면 한번 훑어보는 정도의 시행착오 줄이기 용으로
생각 하시면 될 것 같습니다. 아마도 코드 구현과, 알고리즘 설명의 순서가 다르게 배치가 되어 있어 헷갈리실 수도 있을거라고 생각하지만, 제가 과제를 진행하는 동안 겪었던 과정 순서 그대로를 나열하여 작성 하였기 때문에 혹여나 읽는 순서가 헷갈리시더라도 참고 부탁드립니다.

영문 버전도 작성을 계획중에 있습니다. 그러나 #4을 확인 해보시면 알겠지만, 동일한 강의 내용의 영상을 다시 찾아 정리하거나, 본문 내용을 번역 해야되는 과정 때문에 당장은 어려울것 같습니다..
(english ver.  TBD)

아직 배움이 부족하여 본문을 확인하여 보시고 틀린 내용이 있다면 언제든 지적 부탁드립니다! PR(Pull Request)를 확인 하시거나 슬랙 DM부탁드립니다!

감사합니다~~

### Refs. & Special Thanks to..
```
cub3D 과제를 진행, 해당 자료를 정리하면서 하면서 직, 간접적으로 도움 주신분들께 다시한번 감사드립니다.
도움 주신 분들의 42 내 인트라넷 id 와 github 주소를 명기 해놓았습니다.
```
- @minckim (https://github.com/minckim0)
	- cub3d_lecture: https://github.com/minckim0/cub3d_lect
- @mihykim (https://github.com/365kim)
- @yohlee (https://github.com/l-yohai)
- @taelee (https://github.com/taelee42)
- @chlee (https://github.com/Moongss)
- https://github.com/ssootube
- @eun-park (https://github.com/p-eye)
- @cbaek (https://github.com/paikwiki)
- @kycho (https://github.com/khcho902)
