import styled from 'styled-components';

const PostTweetContainer = styled.div`
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    gap: 16px;
    border: 1px solid #CED7E7;
    border-radius: 10px;
`

const TextInputArea = styled.input`
    border: 1px solid #CED7E7;
    border-radius: 8px;
    width: 90%;
`

const PostTweetComponent = () => {
  return (
    <PostTweetContainer>
      <TextInputArea placeholder='Whats on your mind?'></TextInputArea>
    </PostTweetContainer>
  );
};

export default PostTweetComponent;
