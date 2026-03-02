# II2R — Intro to Raycasting

> A Korean-language tutorial series on raycasting fundamentals for 42 school's cub3d project.

**한국어 튜토리얼입니다.** This tutorial is written in Korean. It covers the math and algorithms behind raycasting (DDA, vectors, trigonometry) as a prerequisite to [Lode's Raycasting Tutorial](https://lodev.org/cgtutor/raycasting.html), designed for [42 school](https://42.fr) students working on the cub3d project.

## Contents

| # | Topic |
|---|-------|
| [1](md/1.md) | Introduction — what is cub3d, where to start |
| [2](md/2.md) | What is raycasting? Visual explanation |
| [3](md/3.md) | First implementation — grid, player, movement |
| [4](md/4.md) | Math prerequisites — Pythagorean theorem, trig, vectors |
| [5](md/5.md) | Understanding Lode's DDA-based raycasting algorithm |
| [6](md/6.md) | Vector math in the implementation — deltaDistX/Y derivation |
| [6_2](md/6_2.md) | Deep dive — rayDir and |v| proof |

---

> "*...If you don't know, now you know..."* - **Notorious B.I.G** (1994)

이 글은 필자가 [42 Seoul](http://42seoul.kr) 에서 주어진 프로젝트 과제인 'cub3d'—울펜슈타인 3D의 엔진을 C로 재현 해보는—과제를 진행 하면서 보고 배우고 느낀 점들을 정리 하기 위해 작성한 글이다.

[Lodev.com](http://lodev.com) 의 'Lode's Computer Graphics Tutorial--Raycasting' 을 읽기 이전에, 문서에서 나온 부분에 관련 지식 기반이 전혀 없는 상태에서 글을 읽어보기 전 어떤 점들을 알아야 하고, 학습을 학습하는데 도움을 위한 목적으로 작성하였다.

반갑습니다. 42 Seoul cadet (교육생) 인트라 ID sucho 입니다.

제가 cub3d 과제를 완수 하기 위해서 공부 해 나갔던 과정들을 정리하여 보았습니다. 이 글을 읽어보시면 도움이 될 것이라고 생각하는 대상은,
- 과제를 수행하기에 앞서 두려움이 있거나,
- 수학적 지식이 기반이 부족하다고 생각 되시는 분
- 시행착오를 약간이라도 줄이고 싶다

라고 생각 됩니다. 본문에서도 많이 강조하는 편이지만, 수학적 지식이나 컴퓨터그래픽스에 대해 이전에 다뤄 보신 분들이 있으시다면 한번 훑어보는 정도의 시행착오 줄이기 용으로
생각 하시면 될 것 같습니다.

아직 배움이 부족하여 본문을 확인하여 보시고 틀린 내용이 있다면 언제든 지적 부탁드립니다! PR(Pull Request)를 확인 하시거나 슬랙 DM부탁드립니다!

감사합니다~~

### Refs. & Special Thanks to..

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
