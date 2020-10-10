# Intro to Intro to Raycasting

#1 

> "*...If you don't know, now you know..."* - **Notorious B.I.G** (1994)

이 글은 필자가 [42 Seoul](http://42seoul.kr) 에서 주어진 프로젝트 과제인 'cub3d'—울펜슈타인 3D의 엔진을 C로 재현 해보는—과제를 진행 하면서 보고 배우고 느낀 점들을 정리 하기 위해 작성한 글이다. 

[Lodev.com](http://lodev.com) 의 'Intro to Raycasting' 을 기반으로 하여, 문서에서 나온 부분에 관련 지식이 전혀 없는 상태에서 어떤 점들을 알고 학습하는데 도움이 될 수 있는 부분들을 정리 한 글이다.

---

42 Seoul 이란?

👉[https://42seoul.kr/about](https://42seoul.kr/about)

---

42?

👉[https://www.42.fr/](https://www.42.fr/)

---

우선 cub3d 과제를 진행 하기 전에 아주 오래 전, 몇 번의 평가—상호 평가;peer evaluation—들을 통하여 cub3d과제를 진행 하면서 주의 해야 할 것들을 간단하게나마 메모 해 놓았었다.

- minilibx (자체 제공 라이브러리; [https://github.com/42Paris/minilibx-linux/blob/master/README.md](https://github.com/42Paris/minilibx-linux/blob/master/README.md))
- 맵
    - 파싱 (문자열 처리)
    - validity check
- 구조체
- memory leak (메모리 누수; malloc 이용, 해제 등 )
- 레이캐스팅
    - 벡터
    - 삼각함수

맵의 경우는, 하다 보니까 문자열 처리의 부분이라 따로 서술 하지 않고, 구조체의 경우는 클러스터에서 과제를 완수하신 분들에게 물어 물어 다음과 같은 대답들을 들을 수 있었다.

```
'구조체 안에 필요한 값들의 변수들을 전부 다 집어 넣어 처리 해야 되기 때문에 
변수가 25~30개 정도 였었던것 같다'
```

이 글이 cub3d를 진행하기 위한 매우 첫번째 단계라면, 도대체 이게 무슨 말인지 모를 수도 있다. cub3d 과제를 진행 하려면 분명 ft_printf를 진행 했을테고, 나의 경우 ft_printf 과제를 할 때 구조체를 활용 하였기 때문에 구조체에 대한 설명/지식이 따로 필요 하진 않았다. 다만 이야기 하고 싶은건, 앞으로 필요할 변수들이 '생각보다' 많기 때문에 구조체를 사용하여야 한다. (안해도 되는지 사실 모르겠는데 하여야 한다.)

memory leak의 경우에도 원인은, '생각보다 많은' 변수들 때문에 문제가 많이 발생 하는것으로 아는데, 이에 대한 해결 방법은 다른 곳에서 찾길 바란다.

---

추천 도서

- Understanding and Using C Pointers: Core Techniques for Memory Management (한글판 있음)

[Understanding and Using C Pointers: Core Techniques for Memory Management](https://www.amazon.com/Understanding-Using-Pointers-Techniques-Management/dp/1449344186)

---

minilibx가 뭔지 알려면 인트라에서 아래 동영상 두개는 꼭 시청하고 오길 바란다 (42 cadet 전용)

---

- [https://elearning.intra.42.fr/notions/minilibx/subnotions/mlx-introduction/videos/introduction-to-minilibx](https://elearning.intra.42.fr/notions/minilibx/subnotions/mlx-introduction/videos/introduction-to-minilibx)
- [https://elearning.intra.42.fr/notions/minilibx/subnotions/mlx-events/videos/minilibx-events](https://elearning.intra.42.fr/notions/minilibx/subnotions/mlx-events/videos/minilibx-events)

---

이 두개 동영상으로 일단 대충 minilibx가 어떤 역할을 하는것인지는 감이 잡혔는데... 과제의 pdf에도 나와 있는 raycasting은 도대체 무슨 말일까?

과제를 해결하기 위해 슬랙에서 이전 아카이브들을 검색 했었을 때, 두가지의 튜토리얼을 사용하여 과제를 해결 한 경우를 많이 볼 수 있었다.

- Lode's Computer Graphics Tutorial ([https://lodev.org/cgtutor/raycasting.html](https://lodev.org/cgtutor/raycasting.html))
    - 사이트 이름이 [lodev.org](http://lodev.org) 라 로데브 로데브 하는듯
    - C++로 작성되어 있음; 코드를 살펴보면 알겠지만 문법이 조금 다름
- Raycasting Basics with JavaScript ([https://courses.pikuma.com/courses/raycasting](https://courses.pikuma.com/courses/raycasting))
    - 역시 사이트 이름이 피쿠마 라서 피쿠마 피쿠마 하는듯 하다
    - 무료 코스이지만 회원가입이 필요하다.
    - 제목에서도 나와 있지만 자바스크립트로 작성되어 있음

여기에 내가 과제를 진행 할 때 쯤 이미 cub3d를 끝낸 선구자들이 꽤 많이 있었기 때문에, 클러스터 안에서 해당 cadet분들의 자료를 많이 참고 했다는 이야기를 들을 수 있었다. (물론 나도 정말 많이 도움 받음)

- mihykim ([https://github.com/365kim/raycasting_tutorial](https://github.com/365kim/raycasting_tutorial))
    - 위의 '로데브'를 한글로 번역 (플러스 알파) 하심
- taelee ([https://github.com/taelee42/mlx_example](https://github.com/taelee42/mlx_example))
    - minilibx 예제를 직접 작성하심
- yohlee ([https://github.com/l-yohai/cub3d](https://github.com/l-yohai/cub3d))
    - '로데브' 에 나와있는 코드를 C로 포팅함

이 레포들을 참고해서 git clone → git push 를 해도 물론 상관은 없다. 당연히 내가 책임은 안진다.

처음 위의 의 사이트들을 보았을 때 도대체 무슨 소린지 하나도 모르겠었다. 절실함이 덜하기도 해서 글을 그냥 대충 읽고 넘어 가기도 했고, 이해를 하려는 노력을 하지도 않았다. 

혹시나 싶어, 막무가내로 유투브에 intro to raycasting을 검색했는데, 아래와 같은 동영상들이 나와 있었다.

![Intro%20to%20Intro%20to%20Raycasting%202d8566d3b7bb47baac5e98aeca74fb6f/Screen_Shot_2020-09-03_at_4.33.56_AM.png](Intro%20to%20Intro%20to%20Raycasting%202d8566d3b7bb47baac5e98aeca74fb6f/Screen_Shot_2020-09-03_at_4.33.56_AM.png)

첫번째는 로블록스라는 게임과 관련 있어 보여서 스킵, 두번째는 유니티, c#이라고 나와있어서 넘기고, 세번째도 섬네일에 unity 라고 나와 있어서 넘기고, 네번째 그림에 웬 고양이와 raycaster tutorial이라는 말이 나와 있어서 한번 눌러 보았다. 

- Make Your Own Raycaster Game ([https://www.youtube.com/watch?v=gYRrGTC7GtA](https://www.youtube.com/watch?v=gYRrGTC7GtA))
    - '고양이' 라고 불림

동영상을 대충 보니 일단

```jsx
1. OpenGL을 사용하지만, C로 raycasting을 구현 한다고 하였고, 
2. 영상으로 raycasting이 어떤 식으로 작동 하는지 설명 해주어서 
```

안일한 생각으로 '아 내가 이 동영상을 보고 opengl 부분만 잘 수정해서 minilibx에 맞게 수정하면 금방 완성해서 뚝딱 할수 있겠지??' 라는 생각으로 일단 이 영상으로 달려 들었다. 결론은, 위의 동영상은 어느 지점에서 구현의 한계에 부딫혀 '로데브' 자료를 참고하여 코드를 작성 하였지만, raycasting의 원리를 영상으로 쉽게 이해 할 수 있고, minilibx에 맞게 튜토리얼에 나온 코드를 수정 해야 하긴 하지만, 직접 따라 구현 해 볼 수 있도록 작성 되어 있어서 큰 도움이 되었다. 그래서, 이 영상은 못해도 한번은 꼭 정주행 하였으면 한다. 

이 영상의 존재가 글을 작성 하게 된 가장 큰 계기이기도 한데, 영상으로 대략적인 레이캐스팅 개념의 이해와, 뭔가 어려워보이는 '로데브' 사이트의 설명의 간극을 채워 나갈 수 있는 설명이 되었으면 한다.

#2.

그러면 도대체 레이캐스팅은 무엇인가?

일단 사전에 raycasting을 검색 해 보니 다음과 같은 정의가 나왔다. 

```jsx
Ray Casting
광선 투사

[영상처리] 보는 이의 시점(또는 카메라의 시점)에서부터 특정 픽셀을 통해 빛을 투사(cast)해서 
이 빛이 물체에 닿거나 보이는 영역에서 벗어날 때까지 따라감으로서, 해당 픽셀의 색을 결정해 렌더링
이미지를 생성하는 방식이다. 빛이 아무 물체에도 닿지 않는다면 해당 픽셀은 검은색이 되고, 
빛이 어떤 객체(오브젝트) 표면에 도달하게 되면 프로그램은 그 빛이 hitting된 지점에서의 객체 
색상을 계산해서 그 값을 해당 픽셀의 색으로 결정한다. 생성될 전체 이미지의 각각의 픽셀마다 순차적으로
위와 같은 과정을 반복한다.

Ray casting은 작업 공간에 존재하는 객체가 여러 개라고 할지라도 그 계산 방식의 특성상 각각 따로 
존재하는 것처럼 렌더링하기 때문에 물체간의 반사나 투명도가 있는 물체를 표현하거나 물체 서로 간에 
그림자를 드리우는 효과를 계산할 수가 없다. 따라서 그러한 효과를 흉내 내기 위해서 일종의 편법들을 
사용하게 되는데 예를 들어, 표면 반사를 위해서는 reflection mapping을 사용하고, 투명 객체를
위해서는 겹쳐지는 두 객체의 색상을 섞어서 (물론 이때 굴절은 기대할 수 없지만) 사용하며, 
그림자는 z-buffer의 정보를 적절히 활용해서 만들어 주게 된다.
[네이버 지식백과] Ray Casting - 광선 투사 (지형 공간정보체계 용어사전, 2016. 1. 3., 이강원, 손호웅)
https://terms.naver.com/entry.nhn?docId=3481586&cid=58439&categoryId=58439
```

너무 어렵다. 혹시나 싶어 조금 더 쉽게 풀이 해 보자면.. x-ray 라는 말은 들어 봤는가? 당연히 있을테고, ray라는 것은 결국 광선을 의미하고, casting 은 캐스팅을 한다는 것이다(?!). ray casting을 한다는 것이다. 

![Intro%20to%20Intro%20to%20Raycasting%202d8566d3b7bb47baac5e98aeca74fb6f/Screen_Shot_2020-09-03_at_4.56.14_AM.png](Intro%20to%20Intro%20to%20Raycasting%202d8566d3b7bb47baac5e98aeca74fb6f/Screen_Shot_2020-09-03_at_4.56.14_AM.png)

(C) 3DSage

'고양이' 동영상에서 따온 그림인데, 그림을 자세히 보면, 왼쪽 그리드(격자)들에 흰색 박스들과 검정색 박스들 안에 노란 점과 초록색 선들이 보일텐데, 오른쪽 그림을 자세히 보면, 이 2D형태의 그림을 3D 형태로 표현 해 놓은것 처럼 보이는것 같다. 

```jsx
- 노란색 점부터 흰색 벽과 맞닿아 있는 초록색 선들을 자세히 살펴보면, 오른쪽 화면의 초록색 벽같이 생긴
  무언가와 거리가 비슷해 보이고, 음영 처리가 되어있는것 처럼 보인다
- 이를 위에서 설명한 ray casting의 개념으로 생각 해 보면, 노란색 점에서 시작한 초록색 광선(빛)이, 
	흰색의 벽에 닿았을 때 내 눈으로 어떻게 돌아 오는가? 를 컴퓨터 화면에 구현한 것이 레이캐스팅 인것이다.
```

아래 사진을 한번 확인 하지면, (고양이 1:53-1:22)

![Intro%20to%20Intro%20to%20Raycasting%202d8566d3b7bb47baac5e98aeca74fb6f/12.mov.gif](Intro%20to%20Intro%20to%20Raycasting%202d8566d3b7bb47baac5e98aeca74fb6f/12.mov.gif)

(C) 3DSage

내가 위치 하는 곳에서 아래의 노란색 빛을 쏜 다음,  **내가 있는 위치**에서 부터 광선들을 쏘아, **벽이 위치 하는 곳** 까지의 ***거리***를 확인 할 수 있다. 

**나의 시점** 에서 벽까지의 거리를 알게 된다면, 벽이 얼마나 멀리 위치하고 있는지 알 수 있게 되고, **나의 시점** 에서 얼벽이 얼마나 멀리 위치하는지 알게 된다면, **내 눈**에 얼마나 크고 작게 보일지도 알 수 있게 된다.

아직도 이해가 안된다고? 아래 그림을 확인해보자.  

![Intro%20to%20Intro%20to%20Raycasting%202d8566d3b7bb47baac5e98aeca74fb6f/coke_pic_2.png](Intro%20to%20Intro%20to%20Raycasting%202d8566d3b7bb47baac5e98aeca74fb6f/coke_pic_2.png)

![Intro%20to%20Intro%20to%20Raycasting%202d8566d3b7bb47baac5e98aeca74fb6f/.mp4.gif](Intro%20to%20Intro%20to%20Raycasting%202d8566d3b7bb47baac5e98aeca74fb6f/.mp4.gif)

콜라광고 아님

![Intro%20to%20Intro%20to%20Raycasting%202d8566d3b7bb47baac5e98aeca74fb6f/coke_pic.png](Intro%20to%20Intro%20to%20Raycasting%202d8566d3b7bb47baac5e98aeca74fb6f/coke_pic.png)

콜라캔이 내 눈에서 가까워질수록, 내 눈에서 콜라캔이 점점 더 커 보이게 된다. 당연한 이야기이지만, **내가 위치하는 곳**에서, **콜라캔이 위치하는 거리**가 점점 더 가까워지기 때문이다. 더 당연한 이야기이지만, **내가 위치하는 곳**에서, **콜라캔이 위치하는 거리**가 멀어질수록, 콜라캔은 점점 더 작아져 보이게 된다. 

그리고 위의 내용을 다시 한번 읽어보면...

```jsx
'...노란색 점에서 시작한 초록색 광선(빛)이, 
흰색의 벽에 닿았을 때 내 눈으로 어떻게 돌아 오는가? 를 컴퓨터 화면에 구현한 것이 
레이캐스팅 인것이다...'
```

이제 레이캐스팅의 원리를 이해 하였으니까, 직접 구현만 하면 되는데, 어떻게 해야할까?

#3

일단 나의 경우, 위에서 이야기 한 것처럼 고양이 동영상을 보고 따라 하면서 직접 구현 해본 다음, cub3d 과제의 제약사항에 맞게 과제를 수정 해나가는 식의 과정을 밟아가기로 계획하였다. 

![Intro%20to%20Intro%20to%20Raycasting%202d8566d3b7bb47baac5e98aeca74fb6f/first_tutorial.mov.gif](Intro%20to%20Intro%20to%20Raycasting%202d8566d3b7bb47baac5e98aeca74fb6f/first_tutorial.mov.gif)

인트라 elearning minilibx 예제를 보고, 창을 띄운 다음에

```c
/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   init.c                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: sucho <sucho@student.42seoul.kr>           +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/07/22 02:31:03 by sucho             #+#    #+#             */
/*   Updated: 2020/09/26 07:48:18 by sucho            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "../includes/mlx_openGL/mlx.h"

int		main(void)
{
	void	*mlx;
	void	*win;

	mlx = mlx_init();
	win = mlx_new_window(mlx, 500, 500, "mlx");
	mlx_loop(mlx);
}
```

```
minilibx 다운 받으셔서 압축 푸신다음에 안에서 라이브러리 빌드 한번 하시고
gcc -L[minilibx 경로] -lmlx -framework OpenGL -framework Appkit init.c
로 컴파일하세요
```

![Intro%20to%20Intro%20to%20Raycasting%202d8566d3b7bb47baac5e98aeca74fb6f/second_tutorial.mov.gif](Intro%20to%20Intro%20to%20Raycasting%202d8566d3b7bb47baac5e98aeca74fb6f/second_tutorial.mov.gif)

'고양이' 예제처럼 윈도우 안에 그리드(격자)를 출력 하고

```c
/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   draw_grid.c                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: sucho <sucho@student.42seoul.kr>           +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/07/22 02:31:03 by sucho             #+#    #+#             */
/*   Updated: 2020/09/26 08:02:06 by sucho            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "../includes/mlx_openGL/mlx.h"

typedef struct	s_window
{
	void	*mlx;
	void	*win;

	int		width;
	int		height;

	int		row_count;
	int		column_count;
	int		grid_color;
}				t_window;

int		draw_grid(t_window *window)
{
	int	draw_position;
	int	i;

	i = 1;
	while (i< window->row_count)
	{
		draw_position = 0;
		while (draw_position <= window->width){
			mlx_pixel_put(window->mlx, window->win, draw_position, i * (window->height / window->row_count),window->grid_color);
			draw_position++;
		}
		i++;
	}
	i = 1;
	while (i< window->column_count)
	{
		draw_position = 0;
		while (draw_position <= window->width){
			mlx_pixel_put(window->mlx, window->win, i * (window->width/ window->column_count), draw_position,window->grid_color);
			draw_position++;
		}
		i++;
	}
	return (0);
}

int		main(void)
{
	t_window window;

	window.width = 500;
	window.height = 500;
	window.row_count = 10;
	window.column_count = 10;
	window.grid_color = 0x00FFFF;
	window.mlx = mlx_init();
	window.win = mlx_new_window(window.mlx, window.width, window.height, "mlx_grid");

	mlx_loop_hook(window.mlx, draw_grid, &window);
	mlx_loop(window.mlx);
}
```

[Intro%20to%20Intro%20to%20Raycasting%202d8566d3b7bb47baac5e98aeca74fb6f/third_tutorial.mov](Intro%20to%20Intro%20to%20Raycasting%202d8566d3b7bb47baac5e98aeca74fb6f/third_tutorial.mov)

그리드 안 중간쯤에  빨간점이 엄~~~~~~청 작게 나오는데 잘 확인 해보시길.

격자 안에 플레이어의 위치가 되는 점을 하나 찍어 보고 키 입력도 받아야되니까, wasd 키로 플레이어의 점이 왔다갔다 하는지 확인 해보았다. 

```c
/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   move_player.c                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: sucho <sucho@student.42seoul.kr>           +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/07/22 02:31:03 by sucho             #+#    #+#             */
/*   Updated: 2020/09/26 08:30:04 by sucho            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "../includes/mlx_openGL/mlx.h"
# define KEY_W 13
# define KEY_A 0
# define KEY_S 1
# define KEY_D 2

typedef struct	s_player
{
	int			x;
	int			y;
	int			color;
}				t_player;

typedef struct	s_window
{
	void	*mlx;
	void	*win;
	t_player player;

	int		width;
	int		height;

	int		row_count;
	int		column_count;
	int		grid_color;
}				t_window;

int		draw_grid(t_window *window)
{
	int	draw_position;
	int	i;

	i = 1;
	while (i< window->row_count)
	{
		draw_position = 0;
		while (draw_position <= window->width){
			mlx_pixel_put(window->mlx, window->win, draw_position, i * (window->height / window->row_count),window->grid_color);
			draw_position++;
		}
		i++;
	}
	i = 1;
	while (i< window->column_count)
	{
		draw_position = 0;
		while (draw_position <= window->width){
			mlx_pixel_put(window->mlx, window->win, i * (window->width/ window->column_count), draw_position,window->grid_color);
			draw_position++;
		}
		i++;
	}
	return (0);
}

void	init_player(t_window *window)
{
	mlx_pixel_put(window->mlx, window->win, window->player.x, window->player.y, window->player.color);
}

void	move_dot_left(t_window *window)
{
	int	old_x = window->player.x;
	int old_y = window->player.y;
	int	black = 0x000000;
	if ((0 < window->player.x && window->player.x <= window->width) &&
		(0 < window->player.y && window->player.x <= window->height))
	{
		//draw old spot with black first
		mlx_pixel_put(window->mlx, window->win, old_x, old_y, black);
		//then draw new spot
		mlx_pixel_put(window->mlx, window->win, --window->player.x, window->player.y, window->player.color);
	}
}

void	move_dot_right(t_window *window)
{
	int	old_x = window->player.x;
	int old_y = window->player.y;
	int	black = 0x000000;
	if ((0 < window->player.x && window->player.x <= window->width) &&
		(0 < window->player.y && window->player.x <= window->height))
	{
		//draw old spot with black first
		mlx_pixel_put(window->mlx, window->win, old_x, old_y, black);
		//then draw new spot
		mlx_pixel_put(window->mlx, window->win, ++window->player.x, window->player.y, window->player.color);
	}
}
void	move_dot_up(t_window *window)
{
	int	old_x = window->player.x;
	int old_y = window->player.y;
	int	black = 0x000000;
	if ((0 < window->player.x && window->player.x <= window->width) &&
		(0 < window->player.y && window->player.x <= window->height))
	{
		//draw old spot with black first
		mlx_pixel_put(window->mlx, window->win, old_x, old_y, black);
		//then draw new spot
		mlx_pixel_put(window->mlx, window->win, window->player.x, --window->player.y, window->player.color);
	}
}
void	move_dot_down(t_window *window)
{
	int	old_x = window->player.x;
	int old_y = window->player.y;
	int	black = 0x000000;
	if ((0 < window->player.x && window->player.x <= window->width) &&
		(0 < window->player.y && window->player.x <= window->height))
	{
		//draw old spot with black first
		mlx_pixel_put(window->mlx, window->win, old_x, old_y, black);
		//then draw new spot
		mlx_pixel_put(window->mlx, window->win, window->player.x, ++window->player.y, window->player.color);
	}
}
int		press_key_for_dot(int key, t_window *window)
{
	if (key == KEY_A)
		move_dot_left(window);
	else if (key == KEY_D)
		move_dot_right(window);
	else if (key == KEY_W)
		move_dot_up(window);
	else if (key == KEY_S)
		move_dot_down(window);
	return (0);
}

int		main(void)
{
	t_window window;
	/////////////////////////////////////
	window.width = 500;
	window.height = 500;
	window.row_count = 10;
	window.column_count = 10;
	window.grid_color = 0x00FFFF;
	/////////////////////////////////////
	window.player.color = 0xFF0000;
	window.player.x = 220;
	window.player.y = 220;
	window.mlx = mlx_init();
	window.win = mlx_new_window(window.mlx, window.width, window.height, "mlx_grid");
	init_player(&window);
	mlx_loop_hook(window.mlx, draw_grid, &window);
	mlx_hook(window.win, 2, 1, press_key_for_dot, &window);
	mlx_loop(window.mlx);
}
```

자 이제 이 과정들을 모두 해결 했으니 동영상에 나온 것처럼 3차원의 화면에 뿌려주기만 하면 되는데... 그 전에 왜 내가 작성한 선들이 왜 계속 이상한 지점에서 멈추지??? 무슨 알고리즘이 잘못됬나?? 싶어 한달동안 삽질의 삽질을 거듭 하였는데... 

```c
원래 계획
(위의 코드들을 바탕으로)
1. 격자 안에 흰색 벽이 될 공간을 칠해서 지나가지 못할 '벽'을 만들어본다.
2. 플레이어가 점으로만 나와 있다면, 방향성을 확인 하기 위해 선을 그어서
2-1. 좌,우 화살표로 회전 하는것이 확인 가능하도록 구현해보기
2-2. 선을 이동 시켜보기
3. 선을 벽이 있는 지점까지 그어보기
```

[Intro%20to%20Intro%20to%20Raycasting%202d8566d3b7bb47baac5e98aeca74fb6f/sapjil.mov](Intro%20to%20Intro%20to%20Raycasting%202d8566d3b7bb47baac5e98aeca74fb6f/sapjil.mov)

소스코드도 날라갔고, 안날아갔어도 공개하기 창피하다

'고양이' 튜토리얼에서 사용된 openGL함수가 따로 없기도 했고, 지도를 파싱하거나, 플레이어의 현재 시점, 위치를 계산하는 방법의 구현에 약간의 차이가 있고(고양이는 삼각함수로만 구현, 로데브는 벡터 사용), 일단 한달동안 cub3d의 진전이 없어 결국 '로데브' 를 따라 가기로 결정 하였다.

그래도 실패의 과정에서 '로데브' 를 이해/구현 하는데 많은 도움이 되었는데, 간략히 요약하자면:

- '나'의 위치와 '내가 보고싶은 위치'를 계산 하는 법
- 삼각함수를 이용한 시점의 회전
- minilibx에는 정말 아무것도 없다(...)
- 선긋기 알고리즘
    - DDA
    - 브레젠함 알고리즘

정도로, 레이캐스팅이 구현되는데 핵심이 되는 개념을 비교적 쉽게 이해 할 수 있었다.

그런데, DDA알고리즘과 브레젠함 알고리즘은 도대체 무엇인가?

#4. (외전)

DDA 알고리즘과 브레젠함 알고리즘

- DDA 알고리즘
    - [https://sugame.tistory.com/200](https://sugame.tistory.com/200)
- 브레젠함 알고리즘 (Brehen
    - [https://en.wikipedia.org/wiki/Bresenham's_line_algorithm](https://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm)
    - [https://playground10.tistory.com/62](https://playground10.tistory.com/62)

따로 준비 하려고 했는데 정리가 잘 되어있어서 해당 링크들을 참조 하면 도움이 될것 같다. 그래도 간단하게 요약 해보면, (x0, y0) → (x1, y1)까지 위치에 선을 그을 때 어떤 방식으로 점을 찍을 것인가? 에 대하여 고민하고 글을 읽어보면 도움이 될것 같다. 혹시 영어가 편하면...

- [https://www.youtube.com/watch?v=W5P8GlaEOSI](https://www.youtube.com/watch?v=W5P8GlaEOSI)
- [https://www.youtube.com/watch?v=RGB-wlatStc](https://www.youtube.com/watch?v=RGB-wlatStc)

위 두 동영상이 큰 도움이 되지 않을까 한다. (쫄지 말자. 쉽다.)

#4. 

그러면 이제 본격적으로 '로데브'의 Intro to Raycastign을 살펴 보기 전에, 공부 해야할 것들이 있는데...

---

준비물

1. 아래의 무언가를 보고 보고, 태어나서 처음 보는 단어가 있으면 구글에 검색 해보기 
    - 피타고라스 정리
    - 사분면
    - 원 반지름 구하는법
    - 코사인 법칙

---

1. 아래 관련 동영상 무조건 시청

[https://www.youtube.com/watch?v=g3n1VxiXgrE](https://www.youtube.com/watch?v=g3n1VxiXgrE)

[https://www.youtube.com/watch?v=0Ho616gAijQ](https://www.youtube.com/watch?v=0Ho616gAijQ)

[https://www.youtube.com/watch?v=e7OY6wfqPLk](https://www.youtube.com/watch?v=e7OY6wfqPLk)

[https://www.youtube.com/watch?v=elMKlIx5_Z0](https://www.youtube.com/watch?v=elMKlIx5_Z0)

```
벡터의 개념과 활용방법을 숙지 하고 있다면 이 부분은 넘어가도 좋지만,
백터를 공부 해 본 적이 없거나 잘 기억이 나지 않는다면 아래의 동영상을 시청하고,
이해 해야지만 Intro to Raycasting의 문서의 내용을 이해 할 수 있기 때문에
위에 나열 하여 놓은 동영상은 '무조건' 시청 하시고, 
유투브에 나와 있는 관련 동영상을 시청 하시는 것을 권해 드립니다.
```

이제 진짜 로데브를 보자...

#5.

드디어 로데브 사이트로 들어 왔다. 

- Lode's Computer Graphics Tutorial
    - [https://lodev.org/cgtutor/raycasting.html](https://lodev.org/cgtutor/raycasting.html)
        - 파트 3 까지 있음 (페이지 맨 끝에 다음 파트로 넘어갈 수 있는 링크가 있음)
    - 한글 번역
        - Part 1: [https://github.com/365kim/raycasting_tutorial](https://github.com/365kim/raycasting_tutorial) (@mihykim)
        - Part 2: [https://github.com/l-yohai/cub3d/blob/master/mlx_example/floor_ceiling.md](https://github.com/l-yohai/cub3d/blob/master/mlx_example/floor_ceiling.md) (@yohlee)
        - Part 3: [https://github.com/l-yohai/cub3d/blob/master/mlx_example/sprite.md](https://github.com/l-yohai/cub3d/blob/master/mlx_example/sprite.md) (@yohlee)

![Intro%20to%20Intro%20to%20Raycasting%202d8566d3b7bb47baac5e98aeca74fb6f/Untitled.png](Intro%20to%20Intro%20to%20Raycasting%202d8566d3b7bb47baac5e98aeca74fb6f/Untitled.png)

![Intro%20to%20Intro%20to%20Raycasting%202d8566d3b7bb47baac5e98aeca74fb6f/Screen_Shot_2020-09-26_at_11.27.24_AM.png](Intro%20to%20Intro%20to%20Raycasting%202d8566d3b7bb47baac5e98aeca74fb6f/Screen_Shot_2020-09-26_at_11.27.24_AM.png)

음 읽어 봤는데... 도통 뭔 소린지 잘 모르겠다..... 라고 생각 할 수 있으나, 결국에는 이때까지 내가 말하고 싶은 부분을 좀더 상세하게 풀어 놓은 문장들이다. [https://github.com/365kim/raycasting_tutorial/blob/master/2_basics.md](https://github.com/365kim/raycasting_tutorial/blob/master/2_basics.md) 해당 페이지를 기준으로 첫번째 bullet point를 조금만 천천히 읽어보면 결국에는

```
- 가상의 그리드위에 나의 좌표위치 (x, y) 로 부터 벽의 위치까지 레이저빔을 쏴서, 
- 이 레이저빔이 벽을 만나면 벽을 뽑아내 주면 된다
```

라는 이야기를 하고 있다. 이걸 어떻게 구현 할 것 인가를, '로데브'는 DDA 알고리즘을 응용한 레이캐스팅 알고리즘을 사용하겠다고 한다는 것이다. 

```
이 튜토리얼에서는 DDA(Digital Differential Analysis) 기반으로 하는 알고리즘이 사용됩니다.

DDA 알고리즘은 2차원 그리드를 지나가는 선(line)이 어떤 네모칸과 부딪히는지 찾을 때 일반적으로 사용되는, 
속도가 빠른 알고리즘입니다. 그래서 이 알고리즘을 사용해서 광선이 맵에서 어떤 네모칸이랑 부딪히는지
찾아낼 수 있고, 벽에 부딪힌 것이 확인되면 이 알고리즘은 중단됩니다.
```

DDA알고리즘을 기반으로 한 레이캐스팅 알고리즘을 구현하였다고 하였는데... #3(링크삽입)에서 DDA알고리즘에 대한 자료를 찾아보고 영상을 시청 하였다면 해당 부분에 대한 약간의 감을 찾을 수 있을텐데, 그래도 DDA알고리즘을 다시 한번 살펴 보자면...

![Intro%20to%20Intro%20to%20Raycasting%202d8566d3b7bb47baac5e98aeca74fb6f/dda_explained.png](Intro%20to%20Intro%20to%20Raycasting%202d8566d3b7bb47baac5e98aeca74fb6f/dda_explained.png)

이 이미지 안에 DDA알고리즘의 모든것이 담겨있다.

1.

- (식의 기울기가 0보다 작을때만 놓고) 주어진 x의 값들에 따라, y의 값들이 변하는 하나의 선이 있다.
- 시작점의 좌표는 (5, 4) 이고 끝점의 좌표는 (12, 7) 일때, x의 변화량과 y의 변화량은 각각 Δx = 7 (12-5) Δy = 3 (7-4)이다.

    $$\Delta x = x_2 - x_1$$

- 그러면 우리는 아래의 공식

    $$y=mx+b$$

    을 통해서 m의 값, **기울기**를 알게 되고 (이때 b의 값은 문제, 식, 사진 어디에서도 주어지지 않았으므로 0), 이 아래의 x_inc 와 y_inc의 값을 통해 서도 알수 있듯이, x가 1씩 증가할 때, y의 값은 0.4 씩 증가하게 된다는 것을 알 수 있게 된다. 

- 다시 이야기 해서, Steps = 7 의 경우 x가 1씩 7번 증가를 하게 될때, y의 값은 상대적으로 0.4 씩 증가하게 된다는 것이다.

2.

- 위에서 나온 수식을 표로 표현 한 것이다. x가 5일때 y의 값은 4이고, x가 6일때 y의 값은 (**0.4씩 증가하기때문에**) 4.4가 되고, x=7 일때, y=4.8이 되고... 12까지 계속 0.4를 더하게 된다.
- 그런데, 여기서 DDA 알고리즘에 이용하기 위해, 소수점 아래의 값들을 반올림 해 주어야 하는데, 우리가 지금 눈으로 보고 있는 **하나의 점** 의 단위는 **픽셀(pixel;px)** 등으로 나타내게 되고, 이 점의 단위는 소수점의 단위를 가지지 않는다.

```
...디지털 이미지는 자연계에 존재하는 어떤 사물, 혹은 장면을 이미지 센서를 통해 디지털 값들의 집합으로
표현 한 것이다...
...외부의 어떤 장면이 카메라 렌즈를 거쳐 디지털 이미지로 형상이 되기 까지 몇가지 좌표계를 거치게 된다...
...이미지를 이루는 가장 작은 단위를 픽셀(pixel)이라 하는데, 이미지를 이루는 점들이라고 생각하면 된다...

- 출처 : 디지털 이미지의 표현과 크기 계산법 - Learn Again! 러너게인 
				(https://twlab.tistory.com/23)
```

- 각 픽셀(소수점을 버린, 자연수)의 지점에 우리가 보는 화면의 픽셀에 점을 찍기 위해, 각각의 수를 반올림 해주게 되면, 표의 세번째 열의 값들을 구할수 있게 된다.

3.

- 이를 좌표계에 그대로 그리게 되면, 반올림이 되어 완벽한 직선의 형태를 띄지 않을 수 있지만,  하나의 픽셀에 점을 찍어 해당 픽셀의 공간을 차지할 수 있게 된다. (해당 픽셀에 점을 찍을수 있다 정도로 생각하자)

```
필자의 내용이긴 하지만, 혹시 x좌표의 수평인 직선과 y좌표의 수평인 직선이 보여,
이미 이 글은 너무 쉬운 내용이기 때문에 바로 구현으로 넘어가셔도 됩니다..^^;  
```

이제 DDA 알고리즘을 대략적으로 알았으니, 이를 활용해서 '로데브'를 읽을 준비를 마쳐보자!

$$deltaDistX =sqrt(1+\frac{rayDirY*rayDirY}{rayDirX*rayDirX})$$

$$deltaDistX =sqrt(1+\frac{rayDirY^2}{rayDirX^2})$$

$$deltaDistX^2 =sqrt(1+\frac{rayDirY^2}{rayDirX^2})^2$$

$$deltaDistX^2 =1+\frac{rayDirY^2}{rayDirX^2}$$