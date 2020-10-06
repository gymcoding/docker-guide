---
title: Remove Image
---

# 이미지 삭제

## 

## 모든 이미지 삭제
`docker rmi -f` - 강제삭제 옵션
```bash
docker rmi $(docker image ls -a -q) # 모든 이미지 삭제
```