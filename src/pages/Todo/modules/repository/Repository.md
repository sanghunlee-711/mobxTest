# Mobx Repository
Repository는 Ajax로 데이터를 가져오는 부분입니다. 
데이터를 가져오는 부분도 Layer를 나누어 구성하는 것을 권장하고 있습니다. 
비즈니스 로직 분리의 이점도 있지만 Test 코드 작성 시 Mocking이 용이 하다는 장점도 있습니다. (물론 ajax 자체를 mocking 할 수 있는 라이브러리도 있지만)
