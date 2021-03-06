---
title: Container Logs
---

# docker logs

## 설명
컨테이너의 로그 가져 오기

## 사용법
```bash
docker logs [OPTIONS] (컨테이너ID 또는 이름)
```

## 옵션
| 연산자 | 설명 | 예제 |
|:---|:---|:---|
| `--details` |  | 로그에 제공된 추가 세부 정보 표시 |
| `--follow, -f` |  | 로그 출력 따르기 |
| `--since` |  | 타임 스탬프 (예 : 2013-01-02T13 : 23 : 37) 또는 상대 (예 : 42 분 동안 42 분) 이후의 로그 표시 |
| `--tail` | all | 로그 끝에서 표시 할 줄 수 |
| `--timestamps , -t` |  | 타임 스탬프 표시 |
| `--until` |  | 타임 스탬프 (예 : 2013-01-02T13 : 23 : 37) 또는 상대적 (예 : 42 분 동안 42m) 앞에 로그를 표시합니다.`API 1.35 이상` |

## 예
- 특정 시점 이전에 로그를 검색하려면 다음을 실행하십시오.
  ```sh
  docker logs -f --until=2s container_name_or_id
  ```

- 마지막 20줄 실시간 로그 출력
  ```sh
  docker logs -f --tail 20 container_name_or_id
  ```
		
 		
		
		
		
