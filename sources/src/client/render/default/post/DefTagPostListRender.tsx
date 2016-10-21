/**
 * Phoenix blog project.
 *
 * Copyright 2016-2016 Arno Zhang <zyfgood12@163.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import BannerFrame from "../common/BannerFrame";
import PostList from "../../../blog/post/PostList";

import {TagPostListRender, TagPostListProps} from "../../BlogRender";


export default class DefTagPostListRender extends TagPostListRender<TagPostListProps, any> {

    render() {
        return (
            <BannerFrame>
                <PostList
                    ref='postList'
                    title={this.props.tagName}
                    pageJumpIndex={`/tag_posts/${this.props.tagName}`}
                    fetcher={this.props.fetcher}/>
            </BannerFrame>
        );
    }
}