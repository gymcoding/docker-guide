---
title: Remove Container
---

# 컨테이너 삭제

## 모든 컨테이너 삭제

```bash
docker stop $(docker ps -a -q)  # 모든 컨테이너 정지
docker rm $(docker ps -a -q)    # 모든 컨테이너 삭제
```

## 종료된 컨테이너 삭제

```bash
docker container prune
```
