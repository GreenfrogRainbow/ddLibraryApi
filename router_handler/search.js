const db = require('../db/index')

// getRecommendList
exports.getRecommendList = (req, res) => {
	// const sql = 'select * from allbooks';

    // db.query(sql, function (err, results) {
    //     if(err) return res.dd(err)

    //     res.send({
    //         status: 0,
    //         message: '查找成功',
    //         data: results.map(result => row.book_id)
    //     })
    // })
    
    // const ratingMatrix = Array.from({ length: users.length }, () => Array(books.length).fill(0));
    
    // ratings.forEach(r => {
    //     const userIndex = users.indexOf(r.userId);
    //     const bookIndex = books.indexOf(r.bookId);
    //     ratingMatrix[userIndex][bookIndex] = r.rating;
    // });
    
    // function cosineSimilarity(vecA, vecB) {
    //     const dotProduct = vecA.reduce((sum, a, idx) => sum + a * vecB[idx], 0);
    //     const magnitudeA = Math.sqrt(vecA.reduce((sum, val) => sum + val * val, 0));
    //     const magnitudeB = Math.sqrt(vecB.reduce((sum, val) => sum + val * val, 0));
    //     if (magnitudeA === 0 || magnitudeB === 0) return 0;
    //     return dotProduct / (magnitudeA * magnitudeB);
    // }
    
    // const bookSimilarityMatrix = Array.from({ length: books.length }, () => Array(books.length).fill(0));
    
    // for (let i = 0; i < books.length; i++) {
    //     for (let j = i; j < books.length; j++) {
    //         const sim = cosineSimilarity(
    //             ratingMatrix.map(row => row[i]),
    //             ratingMatrix.map(row => row[j])
    //         );
    //         bookSimilarityMatrix[i][j] = sim;
    //         bookSimilarityMatrix[j][i] = sim;
    //     }
    // }
    
    // function predictRating(userIndex, bookIndex, ratingMatrix, bookSimilarityMatrix) {
    //     const userRatings = ratingMatrix[userIndex];
    //     let numerator = 0;
    //     let denominator = 0;
    
    //     for (let i = 0; i < userRatings.length; i++) {
    //         if (i !== bookIndex && userRatings[i] > 0) {
    //             numerator += bookSimilarityMatrix[bookIndex][i] * userRatings[i];
    //             denominator += Math.abs(bookSimilarityMatrix[bookIndex][i]);
    //         }
    //     }
    
    //     return denominator === 0 ? 0 : numerator / denominator;
    // }
    
    // function recommendBooks(userId, ratingMatrix, bookSimilarityMatrix, topN = 3) {
    //     const userIndex = users.indexOf(userId);
    //     console.log(userId, userIndex);
    //     const predictions = books.map((bookId, bookIndex) => ({
    //         bookId,
    //         rating: predictRating(userIndex, bookIndex, ratingMatrix, bookSimilarityMatrix)
    //     }));
    
    //     console.log(predictions);
    
    //     return predictions
    //         .filter(p => ratingMatrix[userIndex][books.indexOf(p.bookId)] === 0)
    //         .sort((a, b) => b.rating - a.rating)
    //         .slice(0, topN)
    //         .map(p => p.bookId);
    // }
    
    // // 为用户1推荐书籍
    // const userId = 1;
    // const recommendedBooks = recommendBooks(userId, ratingMatrix, bookSimilarityMatrix, 3);
    // console.log(`推荐给用户${userId}的书籍：`, recommendedBooks);
}

// router.get('/getBooksResult')
exports.getBooksResults = (req, res) => {
	const sql = `select * from allbooks where title like ? or author like ?`
	const search_key = '%' + req.query.search_key + '%'
	db.query(sql, [ search_key,search_key],  (err, results) => {
		if(err) return res.dd(err)

		if(results.length === 0) return res.send({ status: 0, message: '没有搜索到相关结果~', data: [] })

		res.send({
			status: 0,
			message: '查找成功',
			data: results
		})
	})
}

exports.getBooksResultsPages = (req, res) => {
	const sql = `select * from allbooks where title like ? or author like ? limit ?, 25`
	const search_key = '%' + req.query.search_key + '%'
	db.query(sql, [ search_key,search_key, (parseInt(req.query.page)-1) * 25],  (err, results) => {
		if(err) return res.dd(err)

		if(results.length === 0) return res.send({ status: 0, message: '没有搜索到相关结果~', data: [] })

		res.send({
			status: 0,
			message: '查找成功',
			data: results
		})
	})
}

exports.getSearchPages = (req, res) => {
	const sql = `select count(*) cnt from allbooks where title like ? or author like ?`
	const search_key = '%' + req.query.search_key + '%'
	db.query(sql, [ search_key,search_key],  (err, results) => {
		if(err) return res.dd(err)

		res.send({
			status: 0,
			message: '查找成功',
			data: results
		})
	})
}

// router.get('/getBooksResult')
exports.getBooksResult = (req, res) => {
	const sql = `select distinct title label, title value from allbooks where title like ? limit 0, 6`

	const search_keywords = '%'+req.query.search_key+'%'
	db.query(sql, [search_keywords],  (err, results) => {
		if(err) return res.dd(err)

		res.send({
			status: 0,
			message: '查找成功',
			data: results
		})
	})
}


// router.get('/getUsersResultsPages', searchHandler.getBooksResultsPages)
exports.getUsersResultsPages = (req, res) => {
	const sql = `select * from users where username like ? limit ?, 25`
	const search_key = '%' + req.query.search_key + '%'
	db.query(sql, [ search_key, (parseInt(req.query.page)-1) * 25],  (err, results) => {
		if(err) return res.dd(err)

		if(results.length === 0) return res.send({ status: 0, message: '没有搜索到相关结果~', data: [] })

		res.send({
			status: 0,
			message: '查找成功',
			data: results
		})
	})
}

// router.get('/getUsersSearchPages', searchHandler.getSearchPages)
exports.getUsersSearchPages = (req, res) => {
	const sql = `select count(*) cnt from users where username like ?`
	const search_key = '%' + req.query.search_key + '%'
	db.query(sql, [ search_key ],  (err, results) => {
		if(err) return res.dd(err)
	
		res.send({
			status: 0,
			message: '查找成功',
			data: results
		})
	})
}
