import { Component } from 'react';

import './AppModule.css'

import AppControlFrame from '../app-comp-frame/app-control-frame';

import { loadPosts } from '../../services/load-posts.js'
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button'
import { TextInput } from '../../components/TextInput'

class AppModule extends Component {

      state = {
            fromName: 'App Module Default Value',
            posts: [],
            allPosts: [],
            page: 0,
            postsPerPAge: 5,
            searchValue: ''
      }

      async componentDidMount() {
            await this.loadPosts();
      }

      loadPosts = async () => {

            const { page, postsPerPAge } = this.state;

            const postAndPhotos = await loadPosts();

            this.setState({
                  posts: postAndPhotos.slice(page, postsPerPAge),
                  allPosts: postAndPhotos
            });
      }

      loadMorePosts = () => {
            const { page, postsPerPAge, allPosts, posts } = this.state;


            const nextPage = page + postsPerPAge;

            const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPAge)
            posts.push(...nextPosts);

            this.setState({ posts, page: nextPage })
      }

      handleChange = (e) => {
            const { value } = e.target;
            this.setState({ searchValue: value })
      }

      render() {
            const { fromName } = this.props;
            const { posts, page, postsPerPAge, allPosts, searchValue } = this.state;

            const noMorePosts = page + postsPerPAge >= allPosts.length;

            // filtro de Search
            const filterPosts = !!searchValue ?
                  allPosts.filter(post => {
                        return post.title.toLowerCase().includes(searchValue.toLowerCase());
                  })
                  : posts;

            return (
                  <div className="AppModule">
                        <AppControlFrame frameName="Blog Posts" appEnable={true}>
                              <h1>App Module 01 - {fromName}</h1>

                              <div className='search-container'>
                                    {/* Avaliação de curto circuito */}
                                    {!!searchValue && (
                                          <>
                                                <h3>Search Value: {searchValue}</h3>
                                                <h3>Itens: {filterPosts.length}</h3>
                                          </>
                                    )}
                                    <TextInput placeholder={"Type your search"} searchValue={searchValue} handleChange={this.handleChange}></TextInput>
                              </div>
                              {/* Filtragem de posts */}
                              {filterPosts.length > 0 && (
                                    <Posts posts={filterPosts} appEnable={true}></Posts>
                              )}
                              {filterPosts.length === 0 && (
                                    <h3>Não existem posts</h3>
                              )}

                              {/* Avaliação de curto circuito */}
                              {!searchValue &&
                                    <div className='button-container'>
                                          <Button text='Load More' onClick={this.loadMorePosts} disabled={noMorePosts}></Button>
                                    </div>}


                        </AppControlFrame>
                  </div>
            );
      }
}


export default AppModule

