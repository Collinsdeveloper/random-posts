// test/script.test.js
import { expect } from 'chai';
import { displayPosts, fetchPosts } from '../script.js';
import { JSDOM } from 'jsdom';

describe('Lab Async/Await Functions', () => {
    let document;

    beforeEach(() => {
        const dom = new JSDOM(`<!DOCTYPE html><ul id="post-list"></ul>`);
        document = dom.window.document;
        global.document = document;
    });

    it('displayPosts adds li elements to ul', () => {
        const posts = [
            { title: 'Post 1', body: 'Body 1' },
            { title: 'Post 2', body: 'Body 2' }
        ];
        displayPosts(posts);

        const lis = document.querySelectorAll('li');
        expect(lis.length).to.equal(2);
        expect(lis[0].querySelector('h1').textContent).to.equal('Post 1');
        expect(lis[1].querySelector('p').textContent).to.equal('Body 2');
    });

    it('fetchPosts returns an array of posts', async () => {
        const posts = await fetchPosts();
        expect(posts).to.be.an('array');
        expect(posts.length).to.be.at.most(5);
        expect(posts[0]).to.have.property('title');
        expect(posts[0]).to.have.property('body');
    });
});